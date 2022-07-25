<template>
  <div>
    <el-col :span="8" :offset="8">
      <el-card style="height: 500px">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-card>
    </el-col>


  </div>

</template>

<script>
export default {
  name: "Add"
}
</script>

<style scoped>

</style>
