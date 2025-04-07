<script setup lang="ts">
import { ref } from 'vue';

const searchForm = ref({name:'',gender:'',date:[]})

const search = () =>{
  console.log(searchForm.value);
}

const clear = () =>{
  searchForm.value = {name:'',gender:'',date:[]}
}
</script>

<template>
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
      <el-date-picker v-model="searchForm.date" type="daterange" range-separator="到" start-placeholder="开始时间" end-placeholder="结束时间" value-format="yyyy-MM-dd"/><!--value-format设置时间格式-->
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
