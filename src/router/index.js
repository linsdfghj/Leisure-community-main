/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-30 08:47:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:22:02
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//路由配置
import Login from "../pages/Login/Login";
import Layout from "../pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Register from "@/pages/Register/Register";
import First from "../pages/First/First";
import Forum from "@/pages/Forum/Forum";
import FA from "@/pages/Forum/FA/FA";
import TP from "@/pages/Forum/TP/TP";
import Deal from "../pages/Deal/Deal"
import DealRecommend from "../pages/Deal/DealRecommend/DealRecommend"
import DealRequest from "../pages/Deal/DealRequest/DealRequest"
import Letter from "../pages/Letter/Letter"
import Publish from "../pages/Publish/Publish"
import Personal from "../pages/Personal/Personal"
import Discussion from "../pages/Letter/Discussion"
import Privateletter from "../pages/Letter/Privateletter"
import Notice from "../pages/Letter/Officialchildren/Notice"
import Examine from "../pages/Letter/Officialchildren/Examine"
import Jiaoyi from "../pages/Personal/Jiaoyi"
import Shiming from "../pages/Personal/Shiming"
import Zhanghao from "../pages/Personal/Zhanghao"
//配置路由实例

const router = createBrowserRouter([
    {
        //登录
        path: '/',
        element: <Login />
    },
    {
        //注册
        path: '/register',
        element: <Register />
    },
    {
        //首页样式
        path: '/layout',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <></>
            }
        ]
    },
    {
        path: '/first',
        element: <First />
      },
    {
        path: '/letter',
        element: <Letter />,
        children:[
          {
            path: '/letter/notice',
            element: <Notice />
          },
          {
            path: '/letter/examine',
            element: <Examine />
          },
          {
            path: '/letter/discussion',
            element: <Discussion />
          },
          {
            path: '/letter/privateletter',
            element: <Privateletter />
          },
        ]
      },
    {
        path: '/personal',
        element: <Personal />,
        children:[
          {
            path: '/personal/jiaoyi',
            element: <Jiaoyi />
          },
          {
            path: '/personal/shiming',
            element: <Shiming />
          },
          {
            path: '/personal/zhanghao',
            element: <Zhanghao />
          },
        ]
      },
    {
        path: '/publish',
        element: <Publish />,
      },
 
    {
        //论坛
        path: '/forum',
        element: <Forum />,
        children: [
            {
                path: "FA",
                element: <FA />,
            },
            {
                path: "TP",
                element: <TP />,
            },
        ]
    },
    {
        path: '/deal',
        element: <Deal />,
        children: [
          {
            path: "DealRecommend",
            element: <DealRecommend />
          },
          {
            path: "DealRequest",
            element: <DealRequest />
          }
        ]
      },
])

export default router