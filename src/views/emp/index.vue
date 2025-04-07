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

const empList = ref([       
  {
    "id": 1,
    "username": "jinyong",
    "name": "金庸",
    "gender": 1,
    "image": "https://web-framework.oss-cn-hangzhou.aliyuncs.com/2022-09-02-00-27-53B.jpg",
    "job": 2,
    "salary": 8000,
    "entryDate": "2015-01-01",
    "deptId": 2,
    "deptName": "教研部",
    "createTime": "2022-09-01T23:06:30",
    "updateTime": "2022-09-02T00:29:04"
  }]
)

const search = () =>{
  console.log(searchForm.value);  // 1、可以看到date是一个数组,但给后端是两个date值,所以要用新的字段传给后端
}

const clear = () =>{
  searchForm.value = {name:'',gender:'',date:[],begin:'',end:''}
}
</script>

<template>
  {{ searchForm }}  <!-- 为方便看对象的值,可以通过{{}}直接输出方便查看;也可以通过vue开发工具修改响应式数据 -->
  <!-- 搜索区域(行内表单) -->
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

  <!-- 员工列表1、列表新增选择框2、自定义模板3、v-if -->
  <el-table :data="empList" border style="width: 100%">
    <el-table-column type="selection" align="center"/>
    <el-table-column prop="name" label="姓名" align="center"/>
    <el-table-column prop="gender" label="性别" align="center">
      <template #default="scope">
        {{ scope.row.gender == 1 ? '男' : '女'}}
      </template>
    </el-table-column>
    <el-table-column prop="image" label="头像" align="center">
      <template #default="scope">
        <img :src="scope.row.image" height="40">
      </template>
    </el-table-column>
    <el-table-column prop="deptName" label="所属部门" align="center"/>
    <el-table-column prop="job" label="职位" align="center">
      <template #default="scope">
        <span v-if="scope.row.job == 1">班主任</span>
        <span v-else-if="scope.row.job == 2">讲师</span>
        <span v-else-if="scope.row.job == 3">学工主管</span>
        <span v-else-if="scope.row.job == 4">教研主管</span>
        <span v-else-if="scope.row.job == 5">咨询师</span>
        <span v-else>其他</span>
      </template>
    </el-table-column>
    <el-table-column prop="entryDate" label="入职日期" align="center"/>
    <el-table-column prop="updateTime" label="最后操作时间" align="center"/>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button type="primary" size="mini" @click="">编辑</el-button>
        <el-button type="danger" size="mini" @click="">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.demo-form-inline .el-select {
  --el-select-width: 120px;
}

</style>
