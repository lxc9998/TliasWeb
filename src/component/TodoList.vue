<script setup lang="ts"></script>

<template>
  <div class="todo-app">
    <div class="title">Todo App</div>
    <div class="todo-form">
      <input class="todo-input" type="text" placeholder="添加事项...">
      <div class="todo-button">添加</div>
    </div>

    <div class="todo-list">
      <div class="todo-item">
        <input type="checkbox">
        <span>学习vue3</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  display: flex;
  align-items: center;
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
