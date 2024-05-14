import React from 'react'
import './Personalheader.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUserInfo } from '@/store/modules/user'
import { useEffect} from 'react'
import { useSelector } from 'react-redux'
const Personalheader = () => {
   // 触发用户个人信息action
   const dispatch = useDispatch()
   useEffect(()=>{
       dispatch(fetchUserInfo())
   },[dispatch])
 const username = useSelector(state => state.user.userInfo.username)
  const [userInfo] = useState({
    name: username,
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
          <img src={require('../../assets/images/personal/personalheadlike.png')} alt='用户头像' />
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
