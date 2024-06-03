//路由配置
import Login from "../pages/Login/Login"
import { createBrowserRouter } from "react-router-dom"
import React from "react"
import Register from "@/pages/Register/Register"
import Forum from "@/pages/Forum/Forum"
import FA from "@/pages/Forum/FA/FA"
import TP from "@/pages/Forum/TP/TP"
import Personal from "@/pages/Personal/Personal"
import Collect from "@/pages/Personal/Collect/Collect"
import Record from "@/pages/Personal/Record/Record"
import Realname from "@/pages/Personal/Realname/Realname"
import Account from "@/pages/Personal/Account/Account"
import Layout from "@/pages/Layout/Layout"
import UsersHome from "@/pages/UsersHome/UserHome"
import Publish from "@/pages/Publish/Publish"
import Letter from "@/pages/Letter/Letter"
import Deal from "@/pages/Deal/Deal"
import Official from "@/pages/Letter/Official/Official"
import Discussion from "@/pages/Letter/Discussion/Discussion"
import Privateletter from "@/pages/Letter/Privateletter/Privateletter"
import All from "@/pages/Letter/Official/All/All"
import Notice from "@/pages/Letter/Official/Notice/Notice"
import Examine from "@/pages/Letter/Official/Examine/Examine"
import Comment from "@/pages/Letter/Discussion/Comment/Comment"
import DealRecommend from "@/pages/Deal/DealRecommend/DealRecommend"
import DealRequest from "@/pages/Deal/DealRequest/DealRequest"

//配置路由实例

const router = createBrowserRouter([
    {
        //登录
        path: '/',
        element: <Login />
    },
    {
        //测试
        path: '/layout',
        element: <Layout />
    },
    {
        //注册
        path: '/register',
        element: <Register />
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
        //个人主页
        path: '/personal',
        element: <Personal />,
        children: [
            {
                path: "collect",
                element: <Collect />,
            },
            {
                path: "record",
                element: <Record />,
            },
            {
                path: "realname",
                element: <Realname />,
            },
            {
                path: "account",
                element: <Account />,
            },
        ]
    },
    {
        //个人主页
        path: '/usersHome',
        element: <UsersHome />
    },
    {
        //发布
        path: '/publish',
        element: <Publish />
    },
    {
        //消息
        path: '/letter',
        element: <Letter />,
        children: [
            {
                path: "official",
                element: <Official />,
                children: [
                    {
                        path: "all",
                        element: <All />,

                    },
                    {
                        path: "notice",
                        element: <Notice />,
                    },
                    {
                        path: "examine",
                        element: <Examine />,
                    },
                ]
            },
            {
                path: "discussion",
                element: <Discussion />,
                children: [
                    {
                        path: "comment",
                        element: <Comment />,

                    },
                ]
            },
            {
                path: "privateletter",
                element: <Privateletter />,
            },
        ]
    },
    {
        //闲置
        path: '/deal',
        element: <Deal />,
        children: [
            {
                path: "dealrecommend",
                element: <DealRecommend />,
            },
            {
                path: "dealrequest",
                element: <DealRequest />,
            },
        ]
    },

])

export default router