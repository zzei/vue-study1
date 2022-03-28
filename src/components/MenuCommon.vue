<template>
  <!-- 使用element-ui导航菜单组件 -->
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    @select="clickMenu"
  >
    <!-- 系统标题 -->
    <h3>zei-flow</h3>
    <!-- 遍历无子节点菜单数据 -->
    <el-menu-item
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 遍历有子节点菜单数据 -->
    <el-submenu
      v-for="item in hasChildren"
      :index="item.path"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :index="subItem.path"
        :key="subItem.path"
      >
        <!-- index需转化为字符串类型 toString() -->
        <el-menu-item :index="subIndex.toString()">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>


<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #303133;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      //默认不折叠
      isCollapse: false,
      //初始化菜单数据
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "",
        },
        {
          path: "/system",
          name: "system",
          label: "系统设置",
          icon: "setting",
          url: "",
          children: [
            {
              path: "/menu",
              name: "menu",
              label: "菜单管理",
              icon: "menu",
              url: "",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "s-user",
              url: "",
            },
            {
              path: "/role",
              name: "role",
              label: "角色管理",
              icon: "s-operation",
              url: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(e) {
      console.log(e);
      this.$router.push({
        path: e,
      });
    },
  },
  computed: {
    //定义无子节点菜单数据
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    //定义有子节点菜单数据
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>
