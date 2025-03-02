<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 顶部区域 -->
      <el-header class="header">
        <span class="title">Tlias智能学习辅助系统</span>
        <span class="right_tool">
          <a href=""><el-icon>
              <EditPen />
            </el-icon>修改密码</a>
          <a href=""><el-icon>
              <SwitchButton />
            </el-icon> 退出登录</a>
        </span>
      </el-header>
      <!-- 侧边栏+主区域 -->
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu>
            <!-- index可以设置为非数字，配合router属性使用 -->
            <el-menu-item index="/index"><el-icon>
                <HomeFilled />
              </el-icon>首页</el-menu-item>
            <el-sub-menu index="/manage">
              <template #title><el-icon>
                  <message />
                </el-icon>班级学员管理</template>
              <el-menu-item index="class">班级管理</el-menu-item>
              <el-menu-item index="stu">学员管理</el-menu-item>
              <el-sub-menu index="1-4">
                <template #title>待办列表</template>
                <el-menu-item index="todolist">TodoList</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="/manage">
              <template #title><el-icon><Tools/></el-icon>系统信息管理</template>
              <el-menu-item index="1-1">部门管理</el-menu-item>
              <el-menu-item index="1-2">员工管理</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <!-- 主区域 -->
        <el-main>右侧核心区域</el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>
.header {
  background-image: linear-gradient(to right, #00547d, #007fa4, #00aaa0, #00d072, #a8eb12);
  display: flex;
  justify-content: space-between;
}

.title {
  color: white;
  font-size: 40px;
  font-family: 楷体;
  line-height: 60px;
  font-weight: bolder;
}

.right_tool {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  line-height: 60px;
}

a {
  color: white;
  text-decoration: none;
}

.aside {
  width: 220px;
  border-right: 1px solid #ccc;
  height: 730px;
}
</style>
