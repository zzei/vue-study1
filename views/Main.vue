<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
        <menu-common></menu-common>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MenuCommon from '../src/components/MenuCommon.vue';

export default {
  name: "Main",
  components: {
    MenuCommon
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #333;
  color: #ffff;
}
.el-main {
  padding-top: 0;
}
</style>
