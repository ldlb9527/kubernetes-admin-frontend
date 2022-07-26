<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <div class="grid-content">

        </div>
      </el-col>
    </el-row>


    <el-col :span="8" :offset="8">
      <el-card shadow="always">
        <div id="myChart"></div>
<!--        <h1 style="text-align: center">Kubernetes Admin</h1>-->
        <el-divider></el-divider>
        <el-form :model="loginForm" ref="loginForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="账号" prop="username" :rules="[{ required: true, message: '账号不能为空'}]">
            <el-input placeholder="请输入账号" type="text" v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
            <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" autocomplete="off" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>

        </el-form>


      </el-card>
    </el-col>

  </div>

</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    submitForm(formName) {

      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log(this.loginForm.username)
          this.$router.push('/cluster/list')
          //alert("账号:"+this.loginForm.username+"  密码:"+this.loginForm.password);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'),'vintage',{
        width: 400,
        height: 100
      })


      // 绘制图表配置
      let option = {
        graphic: {
          elements: [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: 'Kubernetes Admin',
                fontSize: 40,
                fontWeight: 'bold',
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: 'transparent',
                stroke: '#000',
                lineWidth: 1
              },
              keyframeAnimation: {
                duration: 5000,
                loop: false,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: 'transparent',
                      lineDashOffset: 200,
                      lineDash: [200, 0]
                    }
                  },
                  {
                    // Stop for a while.
                    percent: 0.8,
                    style: {
                      fill: 'transparent'
                    }
                  },
                  {
                    percent: 1,
                    style: {
                      fill: 'black'
                    }
                  }
                ]
              }
            }
          ]
        }
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function() {
        window.onresize = function() {
          myChart.resize();
        }
      }, 200)
    }
  }
}
</script>

<style scoped>
.grid-content {
  border-radius: 8px;
  min-height: 80px;
}

</style>
