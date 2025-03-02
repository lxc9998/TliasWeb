<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
// const b = ref(true) // 验证checkbox的双向绑定
// function ref2() {   // 验证双向绑定v1
//   text.value += '~';
//   console.log(text.value)
//   // b.value = !b.value;
// }

// const list = ref(['学习vue3', '学习java', '学习python'])
const list2 = ref([
  {
    text: '学习vue3',
    checked: false
  },
  {
    text: '学习java',
    checked: false
  },
  {
    text: '学习python',
    checked: false
  }
])

function addTodo() {
  list2.value.push({
    text: text.value,
    checked: false
  })
  text.value = ''
}
function delTodo(index: number) {
  list2.value.splice(index, 1)
}
</script>

<template>
  <div class="todo-app">
    <div class="title">Todo App</div>
    <div class="todo-form">
      <input v-model="text" class="todo-input" type="text" placeholder="请输入待办事项...">
      <div @click="addTodo" class="todo-button">添加</div>
    </div>

    <div v-for="(item, index) in list2" :key="index" :class="item.checked ? 'complete' : 'todo-list'">
      <div>
        <input v-model="item.checked" type="checkbox">
        <span class="name">{{ item.text + index }}</span>
      </div>
      <div @click="delTodo(index)" class="del">del</div>
    </div>
  </div>
</template>

<style scoped>
.complete {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 50px;
  margin: 8px auto;
  padding: 16px;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 20px;
  text-decoration: line-through;
  opacity: 0.4;
}

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
  margin-left: auto;
  padding-top: 30px;
  /* 添加padding虽然可以防止margin塌陷，但是尺寸变大了，需要更换尺寸计算方式  */
  box-sizing: border-box;
  margin-top: 40px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
</style>
