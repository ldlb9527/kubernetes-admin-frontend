<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "./CommonAside";
import CommonHeader from "./CommonHeader";
export default {
  name: "Clusters",
  components: {CommonAside,CommonHeader},
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: black;


}
.el-main {
  padding-top: 0;

}
</style>
