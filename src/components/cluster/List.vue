<template>
  <div>
    <el-button @click="addCluster()" type="primary" class="add-button">添加集群</el-button>
    <el-card style="margin-top: 25px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="(val , key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
<!--        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>-->

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

  </div>



</template>

<script>
import axios from '../../util/axios'
export default {
  inject: ['reload'],
  data() {
    return {
      tableData: [],
      tableLabel : {
        name: '名称',
        status: '状态',
        node: '节点',
        version: '版本',
        create_time: '创建时间',
      }
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$alert('该功能开发中', '提示', {
        confirmButtonText: '确定'
      });
    },
    handleDelete(index, row) {
      this.$confirm('确认删除名称为 '+row.name+' 的集群吗？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('删除')
        axios.request({
          url: 'cluster/delete/' + row.name
        }).then(resp => {
          console.log(resp)
          this.reload()
        })
      }).catch(() => {
        console.log('取消删除')
      })

    },
    addCluster() {
      this.$router.push('/cluster/add')
    }
  },
  mounted() {
    axios.request({
      url: 'cluster/list',
      methods: 'get'
    }).then(res => {

      res.data.data.forEach(json => {
        axios.request({
          url: 'cluster/nodes/' + json.name,
          methods: 'get'
        }).then(response => {
          let status
          let version
          let info
          let readyCount = 0
          let createTime
          let allCount = 0
          response.data.data .forEach(node => {
            if (node.name === 'master') {
              version = node.kubelet_version
              createTime = node.creation_timestamp
            }
            if (node.status === 'True') readyCount++
            allCount++
          })
          if (readyCount === allCount) status = '正常'
          this.tableData.push({
            name: json.name,
            status: status,
            node: readyCount + '/' + allCount,
            version: version,
            create_time: createTime
          })

        })

      })
    })

  }
}
</script>

<style lang="less" scoped>
.add-button {
  margin-top: 10px;
}

</style>
