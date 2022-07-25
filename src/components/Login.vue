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
        <h1 style="text-align: center">Kubernetes Admin</h1>
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
