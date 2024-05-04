/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-04 15:37:32
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-04 16:14:47
 * @FilePath: \new_code_1c:\Users\86135\Downloads\Leisure-community-main\Leisure-community-main\src\pages\Letter\Privateletter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Header from '../../style/Header'
import Lettersider from './Lettersider'
import { Layout } from 'antd'

import './Privateletter.css'

const { Sider, Content } = Layout

const Privateletter = () => {
  return (
    <div className='letter-all'>
      <Header />
      <h1>消息中心</h1>
      <Layout className="all">
        <Sider>
          <Lettersider />
        </Sider>
        <Content>
          <div className='privateletter-content'>
            <div className='privateletter-left'>
              <div className='left-up'>
                <p>最近联系</p>
              </div>
              <div className='left-down'>
                <img src={require('../../assets/images/pictures/privateletterzanwu.png')} alt='暂无联系人' />
              </div>
            </div>
            <div className='privateletter-right'>
              <div className='right-up'>

              </div>
              <div className='right-down'>

              </div>
            </div>
          </div>

        </Content>


      </Layout>
    </div>
  )
}

export default Privateletter