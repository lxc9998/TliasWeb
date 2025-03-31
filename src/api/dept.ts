import request from "@/utils/request"

// 查询所有部门
export const queryAllApi = () => request.get('/getDeptList')

// 新增部门
export const addDeptApi = (deptForm:object) => request.post('/addDept', deptForm);

// 删除部门(POST必须传对象)
export const delDeptApi = (deptId:number) => request.post('/delDept', {id:deptId})
