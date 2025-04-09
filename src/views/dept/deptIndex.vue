<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {queryAllApi,addDeptApi,delDeptApi,getDeptInfoApi,updateDeptApi} from '@/api/dept'
import { ElMessage, ElMessageBox } from 'element-plus'

const deptList = ref([])

// 查询所有部门
const queryAll = async () =>{
  const result = await queryAllApi()
  deptList.value = result.data
}

const showDialog = ref(false) // // 对话框是否显示,默认不显示
const formTitle = ref() // 表单标题
const deptForm = ref({deptName:'',id:0})   // 表单数据Element-plus中的model属性必须绑定为对象,哪怕只有一个string类型的属性
// 表单校验规则
const rules = ref({
  deptName: [
    { required: true, message: '请输入部门名称', trigger: 'blur' }, // trigger: 'blur'输入框失去焦点时触发校验规则
    { min: 2, max: 12, message: '部门名称2-12字符', trigger: 'blur' },
  ]
})

const deptFormRef = ref(null)


// 打开新增/编辑部门对话框(复用对话框)
const deptDialog = () =>{
  // 显示对话框
  showDialog.value = true
  // 清空表单数据
  // deptForm.value = {deptName:''}
  // 重置表单校验规则
  if (deptFormRef.value) {  // 如果表单已经渲染,则清空表单校验规则
    deptFormRef.value.resetFields()
  }
}

// 新增部门打开对话框
const addDept = () => {
  // 弹出对话框,修改标题
  deptDialog()
  formTitle.value = '新增部门'
}

// 新增/修改部门请求(复用逻辑)
const submitDept = async () =>{
  if(!deptFormRef.value) return;  // vue3中的ref会在组件挂载后才会被赋值,防止表单未渲染就调用.validate等方法报错
  await deptFormRef.value.validate(async(valid)=>{  // 这里的await,是等待表单校验通过后,再执行后面的代码,防止在数据加载完成前用户进行其他操作.  飘红是因为validate方法没有被正确识别,先不管
    if (valid) {  // 表单校验通过
      // 判断是新增部门还是编辑部门
      let result = null;
      if(!deptForm.value.id){ // 如果有id,则是编辑部门,否则是新增部门
        result = await addDeptApi(deptForm.value) // deptForm.value目前就是一个对象:{name:'输入的部门名称'} 这里的await是等待请求成功再获取响应数据,这些await使得异步操作按顺序执行，代码逻辑更清晰
      }else{
        result = await updateDeptApi(deptForm.value)
      }
      if (result.code) {  // 请求成功-新增成功  code提示:类型“AxiosResponse<any, any>”上不存在属性“code”先不管,不好解决
        ElMessage.success('操作成功！'); // 提示新增成功
      } else {  /// 请求成功-新增失败
        ElMessage.error('操作失败：'+result.msg);
      }
      showDialog.value = false; // 关闭对话框
    }else{  // 表单校验不通过
      ElMessage.error('操作失败：请检查输入的部门名称是否符合要求！');
    }
    await queryAll(); // 刷新部门列表
  })
}

// 编辑部门打开对话框
const editDept = async (id:number) =>{
  // 打开对话框,替换标题
  deptDialog()
  formTitle.value = '编辑部门'
  // 回显数据-根据传入的id查询部门名称
  const result = await getDeptInfoApi(id)
  if(result.code){
    deptForm.value.deptName = result.data
    deptForm.value.id = id
  }else{
    ElMessage.error('网络异常')
  }
}

// 删除部门
const deleteDept = async (deptId:number) =>{
  // 二次确认弹对话框
  ElMessageBox.confirm('确认删除该部门吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    const result = await delDeptApi(deptId);
    if(result.code){
      ElMessage.success('删除部门成功！');
      await queryAll();
    }else{
      ElMessage.error('删除失败：'+result.msg);
    }
  })
}

onMounted(()=>{
  queryAll()
})
</script>

<template>
  <!-- 新增按钮 -->
  <el-button type="primary" @click="addDept">新增部门</el-button>
  <!-- 新增/编辑对话框 -->
  <el-dialog v-model="showDialog" :title="formTitle" width="500" :close-on-click-modal="false">
    <el-form :model="deptForm" :rules="rules" ref="deptFormRef">  <!-- :model="deptForm"表示这个表单的数据绑定到这个对象上; :rules="rules"表示将检验规则与该表单进行绑定; ref="deptFormRef"用来表示表单是否渲染完成再进行后续操作-->
      <el-form-item label="部门名称" prop="deptName">  <!-- prop="deptName"表示使用rules中的deptName规则 -->
        <el-input v-model="deptForm.deptName"/>  <!-- 注意要修改的是表单中的deptName字段,请求的时候要带这个字段,而编辑的时候又要回显这个字段,所以需要双向绑定 -->
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showDialog=!showDialog">取消</el-button>
        <el-button type="primary" @click="submitDept()">确认</el-button>
      </div>
    </template>
  </el-dialog>

  <!-- 部门列表 -->
  <el-table :data="deptList" :border="true">
    <el-table-column type="index" label="序号" :min-width="20" align="center"/>
    <el-table-column prop="deptName" label="部门名称" align="center"/>
    <el-table-column prop="createTime" label="创建时间" align="center"/>
    <el-table-column prop="updateTime" label="更新时间"  align="center"/>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button type="primary" size="small" @click="editDept(scope.row.id)">编辑</el-button>
        <el-button type="danger" size="small" @click="deleteDept(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
