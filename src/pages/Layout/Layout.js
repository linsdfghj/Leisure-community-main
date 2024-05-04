import React, {Component} from 'react';
import './Layout.scss'
// import Header from "@components/Header/Header";
import Header from '@/components/Header/Header'

class Layout extends Component {
    render() {
        return (
            <div className='Layout-container'>
                <Header/>
                我是首页
            </div>
        );
    }
}

export default Layout;