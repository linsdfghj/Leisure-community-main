/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-05-12 15:31:23
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-05-12 15:45:40
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\components\AuthRoute\AuthRoute.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 封装高阶组件：有token正常跳转，无则去登录
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";
// children作为函数参数是一个要跳转的组件
export function AuthRoute({ children }){
    const token = getToken()
        if (token) {
            return <>{children}</>
        }else{
            return <Navigate to={'/'} replace></Navigate>
        }
}
