import request from "@/utils/request";

export const getEmpListApi = (pageNum:number,pageSize:number) => request.get(`/emps?pageNum=${pageNum}&pageSize=${pageSize}`)
