/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:52:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:18:00
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\style\Header.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import './Header.css'
import { Row, Col, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'



const Header = () => {
  const [logoutVisible, setLogoutVisible] = useState(false)

  const handleLogout = () => {
    // 在这里放置退出登录的逻辑
    console.log("用户点击了退出登录")
  }

  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={handleLogout}>
        <a href="/">退出登录</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="header">
      <Row type="flex">
        <Col className='header-logo'></Col>
        <Col>
          <span className="header-name">闲享社群</span>
        </Col>
        <Col className="header-menu">
          <Menu mode="horizontal">
            <Menu.Item key="first">
              <Link to="/First" exact="true" >
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key="forum">
              <Link to="/Forum" exact="true" >
                校园论坛
              </Link>
            </Menu.Item>
            <Menu.Item key="deal">
              <Link to="/Deal" exact="true" >
                闲置交易
              </Link>
            </Menu.Item>
            <Menu.Item key="publish">
              <Link to="/Publish" exact="true" >
                <img className='header-picture1' src={require('../assets/images/pictures/publish.png')} alt="publish" />
              </Link>
            </Menu.Item>
            <Menu.Item key="letter">
              <Link to="/Letter" exact="true" >
                <img className='header-picture2' src={require('../assets/images/pictures/letter.png')} alt="letter" />
              </Link>
            </Menu.Item>

            <Menu.Item key="personal">
              <Link to="/Personal" exact="true" >
                <img className='header-picture3' src={require('../assets/images/pictures/personal.png')} alt="personal" />
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col className='jiantou'>
          {/* 直接在图片上绑定点击事件 */}
          <Dropdown overlay={menu} trigger={['click']} visible={logoutVisible}>
            {/* 在图片上添加点击事件，触发 setLogoutVisible 更新状态 */}
            <img className='header-picture4' src={require('../assets/images/pictures/jiantou.png')} alt="jiantou" onClick={() => setLogoutVisible(!logoutVisible)} />
          </Dropdown>
        </Col>

      </Row>
    </div>
  )
}

export default Header;

