<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {queryAllApi} from '@/api/dept'

const deptList = ref([])

const queryAll = async () =>{
  const result = await queryAllApi()
  deptList.value = result.data
  console.log(deptList.value)
}

onMounted(()=>{
  queryAll()
})
</script>

<template>
  <el-table :data="deptList">
    <el-table-column type="index" label="序号" />
    <el-table-column prop="name" label="部门名称" />
    <el-table-column prop="createTime" label="创建时间" />
    <el-table-column prop="updateTime" label="更新时间"  />
  </el-table>
</template>

<style scoped>

</style>
