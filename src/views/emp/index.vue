<script setup lang="ts">
import { ref, watch } from 'vue';

const searchForm = ref({name:'',gender:'',date:[],begin:'',end:''}) // 新增两个要传给后端的字段

watch(()=>searchForm.value.date,(newVal)=>{   // ()=>searchForm.value.date表示仅监听seachForm对象中date数组的变化
  if(newVal.length == 2){   // 当date数组长度为2时,表示选择了两个日期,此时可以将两个日期分别赋值给begin和end
    searchForm.value.begin = newVal[0]
    searchForm.value.end = newVal[1]
  }else{    // 否则还原为初始值
    searchForm.value.begin = ''
    searchForm.value.end = ''
  }
})

const search = () =>{
  console.log(searchForm.value);  // 1、可以看到date是一个数组,但给后端是两个date值,所以要用新的字段传给后端
}

const clear = () =>{
  searchForm.value = {name:'',gender:'',date:[],begin:'',end:''}
}
</script>

<template>
  {{ searchForm }}  <!-- 为方便看对象的值,可以通过{{}}直接输出方便查看;也可以通过vue开发工具修改响应式数据 -->
  <!-- 行内表单 -->
  <el-form :inline="true" :model="searchForm" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable />
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="searchForm.gender" placeholder="请选择性别" clearable>
        <el-option label="男" value="1" />
        <el-option label="女" value="0" />
      </el-select>
    </el-form-item>
    <el-form-item label="入职时间">
      <el-date-picker v-model="searchForm.date" type="daterange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间" value-format="YYYY-MM-DD"/><!--value-format设置时间格式-->
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="danger" @click="clear">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.demo-form-inline .el-select {
  --el-select-width: 120px;
}

</style>
