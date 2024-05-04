/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:37:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:16:48
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\pages\Personal\Personalheader.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import './Personalheader.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Personalheader = () => {
  const [userInfo] = useState({
    name: '晴绘',
    level: 'Lv.1',
    followers: '粉丝 0 | 关注 0 | 点赞 0',
    location: '南京 | 南京理工大学紫金学院',
  })

  // 使用React Router的 useNavigate 获取导航函数
  const navigate = useNavigate()

  // 处理修改信息按钮点击事件
  const handleEditClick = () => {
    // 直接跳转到另一个页面，例如 '/first'
    navigate('/personal/zhanghao')
  }

  return (
    <div className='personalheader-all'>
      <div className='user-profile'>
        {/* 左侧头像 */}
        <div className='avatar'>
          <img src={require('../../assets/images/pictures/personalheadlike.png')} alt='用户头像' />
        </div>

        {/* 中间用户信息 */}
        <div className='user-info'>
          <h2>{userInfo.name} {userInfo.level}</h2>
          <p>{userInfo.location}</p>
          <p>{userInfo.followers}</p>
        </div>

        {/* 右侧修改信息按钮 */}
        <div className='edit-button'>
          {/* 点击按钮直接执行跳转逻辑 */}
          <button onClick={handleEditClick}>修改信息</button>
        </div>
      </div>
    </div>
  )
}

export default Personalheader
