import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './common.scss'
import { Button } from 'antd';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            logosrc:require('./../assets/image/logo.png')
        }
    }
    render() {
        return (
            <div className='Header'>
                <div className='maincontent'>
                    <img src={this.state.logosrc} alt="icp" />
                    <div className='list'>
                        <NavLink exact to='/' activeClassName='lightbg'>首页</NavLink>
                        <NavLink  to='/order'  activeClassName='lightbg'>课程购买</NavLink>
                        <NavLink  to='/order'  activeClassName='lightbg'>关于我们</NavLink>
                    </div>
                    <Button className='buy'>登录</Button>
                    <Button className='register' type="primary" >注册</Button>
                </div>
            </div>
        )
    }
}
