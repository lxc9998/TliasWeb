<script setup lang="ts">
import { ref } from 'vue'
const a = ref('123')
function ref2() {
  a.value += '~';
  console.log(a.value)
}
</script>

<template>
  <div class="todo-app">
    <div class="title">Todo App</div>
    <div class="todo-form">
      <input v-model="a" class="todo-input" type="text" placeholder="请输入待办事项...">
      <div @click="ref2" class="todo-button">添加</div>
    </div>

    <div class="todo-list">
      <div>
        <input type="checkbox">
        <span class="name">学习vue3</span>
      </div>
      <div class="del">del</div>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
}

.name {
  padding-left: 3px;
}

.del {
  color: red;
}

.todo-form {
  display: flex;
  margin: 20px 0 0 30px;
}

.todo-input {
  border: 1px solid #dfe1e5;
  outline: none;
  width: 60%;
  height: 50px;
  border-radius: 20px 0 0 20px;
  padding-left: 15px;
  margin-bottom: 20px;
}

.todo-button {
  color: #ffff;
  border: 1px solid #dfe1e5;
  border-radius: 0 20px 20px 0;
  width: 100px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  background: linear-gradient(to right, rgb(113, 65, 168), rgba(44, 114, 251, 1));
  cursor: pointer;
  user-select: none;
}

.todo-app {
  border: 2px solid red;
  border-radius: 5px;
  width: 98%;
  height: 500px;
  margin-left: 1%;
  padding-top: 30px;
  box-sizing: border-box;
  /* 防止padding撑开盒子  */
  margin-top: 40px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>
