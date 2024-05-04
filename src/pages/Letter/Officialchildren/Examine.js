/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:37:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:15:10
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\pages\Letter\Officialchildren\Examine.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Header from '../../../style/Header'
import Lettersider from '../Lettersider'
import { Layout } from 'antd'
import './Examine.css'
import Miniheader from '../Miniheader'

const { Sider, Content } = Layout
const Examine = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <div>
            <Miniheader />
          </div>

          <div className='letter-content'>
            <img src={require('../../../assets/images/pictures/zanwuxiaoxi.png')} alt='暂无消息' />
          </div>
        </Content>


      </Layout>
    </div>
  )
}

export default Examine
