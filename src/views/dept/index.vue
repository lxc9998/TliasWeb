<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {queryAllApi} from '@/api/dept'

let deptList = ref([])

const queryAll = async () =>{
  const result = await queryAllApi()
  deptList.value = result.data
}

onMounted(()=>{
  queryAll()
})
</script>

<template>
  <el-table :data="deptList" style="width: 100%">
    <el-table-column type="index" label="序号" width="180" />
    <el-table-column prop="name" label="部门名称" width="180" />
    <el-table-column prop="name" label="创建时间" width="180" />
    <el-table-column prop="address" label="更新时间" width="180"  />
  </el-table>
</template>

<style scoped>

</style>
