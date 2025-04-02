import request from "@/utils/request"

// 查询所有部门
export const queryAllApi = () => request.get('/getDeptList')

// 新增部门
export const addDeptApi = (deptForm:object) => request.post('/addDept', deptForm);

// 删除部门(POST必须传对象)
export const delDeptApi = (deptId:number) => request.post('/delDept', {id:deptId})

// 编辑部门请求部门名称
export const getDeptInfoApi = (deptId:number) => request.get(`/getDeptInfo/${deptId}`)  // 反引号表示字符串模板(可以看到变量高亮了)

// 提交编辑部门
export const updateDeptApi = (deptForm:object) => request.post('/updateDept', deptForm)