<script setup lang="ts">

// 数据
let name = '张三'
let age = 18

// 函数
function addName() {
  return name += 1
}
function addAge() {
  return age += 1
}

</script>

<template>
  <h1>响应式</h1>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <!-- Emmt快速创建标签 button[@click="addName"]{修改姓名} -->
  <button @click="addName">修改姓名</button>
  <button @click="addAge">年龄加1</button>
</template>

<style scoped></style>
