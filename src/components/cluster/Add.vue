<template>
  <div>
    <el-col :span="8" :offset="8">
      <el-card style="height: 500px">

        <div style="text-align: center" class="demo-input-suffix">
          名称：
          <el-input style="width: 300px"
            placeholder="请输入名称"
            v-model="name">
          </el-input>
        </div>

        <el-upload style="text-align: center; margin-top: 10px"
          class="upload-demo"
          drag
          action="#"
          :multiple="false"
          :show-file-list="true"
          :http-request="uploadHttpRequest"
          :file-list="fileList"
          :auto-upload="false"
          :on-change="handleUploadChange"
          :before-upload="beforeUpload"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

        <div style="text-align: right">
          <el-button @click="quit()">取消</el-button>
          <el-button type="primary"  @click="confirm()">确认</el-button>
        </div>
      </el-card>
    </el-col>


  </div>

</template>

<script>
import axios from '../../util/axios'
export default {
  name: "Add",
  // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
  data() {
    return {
      // 上传文件的列表
      fileList: [],
      name: ''
    }
  },
  methods: {
    beforeUpload(file) {

      if (file.name !== 'config') {
        this.$message.error('文件名必须为config')
        this.fileList = []
        return false
      }
    },
    // 覆盖element的默认上传文件
    uploadHttpRequest(data) {
      console.log(data)
      let reader = new FileReader()
      let that = this
      reader.readAsText(data.file)
      reader.onload = function() {
        that.formData.mmiapXml = this.result
      }
    },
    // 限制文件上传的个数只有一个，获取上传列表的最后一个
    handleUploadChange(file, fileList) {
      if (fileList.length > 0) {
        this.fileList = [fileList[fileList.length - 1]] // 这一步，是 展示最后一次选择的文件
      }
    },
    quit() {
      this.$router.push('/cluster/list')
    },
    confirm() {
      let param = new FormData()
      param.append('file',this.fileList[0].raw)
      axios.request({
        url: 'cluster/add/' + this.name,
        method: 'post',
        data: param,
        headers: {'Content-Type': 'multipart/form-data'},
      }).then(result => {
        console.log(result)
        this.$router.push('/cluster/list')
      })
    }
  }

}
</script>

<style scoped>

</style>
