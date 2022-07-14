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
        <h1>Kubernetes Admin</h1>
        <el-divider></el-divider>
        <el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="账号" prop="username" :rules="[{ required: true, message: '账号不能为空'}]">
            <el-input placeholder="请输入账号" type="text" v-model="ValidateForm.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '密码不能为空'}]">
            <el-input placeholder="请输入密码" type="password" v-model="ValidateForm.password" autocomplete="off" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
            <el-button @click="resetForm('ValidateForm')">重置</el-button>
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
      ValidateForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ValidateForm.username)
          alert("账号:"+this.ValidateForm.username+"  密码:"+this.ValidateForm.password);
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
