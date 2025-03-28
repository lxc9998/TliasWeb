<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {queryAllApi} from '@/api/dept'

const deptList = ref([])

const queryAll = async () =>{
  const result = await queryAllApi()
  deptList.value = result.data
  console.log(result.data)
}
const editDept = (id:number) =>{
  console.log('部门id:', id)
}
const deleteDept = (id:number) =>{
  console.log('部门id:',id)
}

onMounted(()=>{
  queryAll()
})
</script>

<template>
  <el-table :data="deptList" :border="true">
    <el-table-column type="index" label="序号" :min-width="20"/>
    <el-table-column prop="name" label="部门名称" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="updateTime" label="更新时间"  />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="primary" size="small" @click="editDept(scope.row.id)">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteDept(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
