/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:37:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:17:28
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\pages\Personal\Zhanghaoheader.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import './Zhanghaoheader.css'
import { useState } from 'react'

const Personalheader = () => {
  const [userInfo] = useState({
    name: '晴绘',
    level: 'Lv.1',
    followers: '粉丝 0 | 关注 0 | 点赞 0',
    location: '南京 | 南京理工大学紫金学院',
  })


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

      </div>
    </div>
  )
}

export default Personalheader
