/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:37:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:14:21
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\pages\Letter\Discussion.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Header from '../../style/Header'
import Lettersider from './Lettersider'
import { Layout, Menu } from 'antd'
import './Discussion.css'
import { Link } from 'react-router-dom'


const { Sider, Content } = Layout

const Discussion = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <Menu mode="horizontal"
            className="miniheader"
            defaultSelectedKeys={['View']}>
            <Menu.Item key="View">
              <Link to="/Letter/Discussion" exact="true">评论</Link>
            </Menu.Item>
          </Menu>
          <div className='letter-content'>
            <img src={require('../../assets/images/pictures/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}

export default Discussion

