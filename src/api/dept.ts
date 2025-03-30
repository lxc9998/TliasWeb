import request from "@/utils/request"

export const queryAllApi = () => request.get('/getDeptList')

// 类似Java的实体类,参数需要传这个类型
interface deptData {
    deptName: string
}

export const addDeptApi = (deptForm:deptData) => request.post('/addDept', deptForm);
