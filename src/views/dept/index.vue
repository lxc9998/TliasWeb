<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import {queryAllApi,addDeptApi} from '@/api/dept'
import { ElMessage } from 'element-plus'

const deptList = ref([])

// 查询所有部门
const queryAll = async () =>{
  const result = await queryAllApi()
  deptList.value = result.data
}

// 对话框是否显示
const showDialog = ref(false) // 默认不显示对话框
// 表单标题
const formTitle = ref()
// 表单数据
const deptForm = ref({deptName:''})   // Element-plus中的model属性必须绑定为对象,哪怕只有一个string类型的属性
// 表单校验规则
const rules = reactive({
  deptName: [
    { required: true, message: '请输入部门名称', trigger: 'blur' }, // trigger: 'blur'输入框失去焦点时触发校验规则
    { min: 2, max: 12, message: '部门名称2-12字符', trigger: 'blur' },
  ]
})


// 打开新增部门对话框
const openAddDeptDialog = () =>{
  // 显示对话框
  showDialog.value = true
  // 清空表单数据
  deptForm.value = {deptName:''}
  // 修改表单标题
  formTitle.value = '新增部门'
  // 清空表单校验规则

}

// 新增部门
const submitDept = async () =>{
  // 请求新增部门接口
  const result = await addDeptApi(deptForm.value);  // deptForm.value目前就是一个对象:{name:'输入的部门名称'}
  if (result.code) {  // code提示:类型“AxiosResponse<any, any>”上不存在属性“code”先不管,不好解决
    // 提示新增成功
    ElMessage.success('新增部门：'+deptForm.value.deptName+'成功！');
  } else {
    ElMessage.error('操作失败：'+result.msg);
  }
  // 关闭对话框
  showDialog.value = false;
  // 刷新部门列表
  queryAll();
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
  <!-- 新增按钮 -->
  <el-button type="primary" @click="openAddDeptDialog">新增部门</el-button>

  <!-- 新增/编辑对话框 -->
  <el-dialog v-model="showDialog" :title="formTitle" width="500" :close-on-click-modal="false">
    <el-form :model="deptForm" :rules="rules">  <!-- :model="deptForm"表示这个表单的数据绑定到这个对象上 -->
      <el-form-item label="部门名称" props="deptName">
        <el-input v-model="deptForm.deptName"/>  <!-- 注意要修改的是表单中的deptName字段,请求的时候要带这个字段,所以是双向绑定 -->
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showDialog=!showDialog">取消</el-button>
        <el-button type="primary" @click="submitDept">确认</el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 部门列表 -->
  <el-table :data="deptList" :border="true">
    <el-table-column type="index" label="序号" :min-width="20"/>
    <el-table-column prop="deptName" label="部门名称" />
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
