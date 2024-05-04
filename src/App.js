import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import 'antd'
//导入页面组件
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import First from "./pages/First/First"
import Forum from "../pages/Forum/Forum"
import FA from './pages/Forum/FA/FA'
import Deal from "../pages/Deal/Deal"
import DealRecommend from '../pages/DealRecommend/DealRecommend'
import DealRequest from './pages/Deal/DealRequest/DealRequest'
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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Layout' element={<Layout />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/First' element={<First />} />
                <Route path='/Letter' element={<Letter />} />
                <Route path='/Publish' element={<Publish />} />
                <Route path='/Personal' element={<Personal />} />
                <Route path='/First' element={<First />}></Route>
                <Route path='/Forum/*' element={<Forum />} />
                <Route path='/FA' element={<FA />}></Route>
                <Route path='/Deal' element={<Deal />} />
                <Route path="DealRecommend" element={<DealRecommend />}></Route>
                <Route path='DealRequest' element={<DealRequest />}></Route>
                <Route path='/Letter/Notice' element={<Notice />} />
                <Route path='/Letter/Examine' element={<Examine />} />
                <Route path='/Letter/Discussion' element={<Discussion />} />
                <Route path='/Letter/Privateletter' element={<Privateletter />} />
                <Route path='/Personal/Jiaoyi' element={<Jiaoyi />} />
                <Route path='/Personal/Shiming' element={<Shiming />} />
                <Route path='/Personal/Zhanghao' element={<Zhanghao />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
