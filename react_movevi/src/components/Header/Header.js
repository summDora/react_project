import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss'
import { Button } from 'antd';

class Header extends React.Component{
  render(){
    return(
      <div className='Header'>
        <img src={require('./../../assets/images/logo.png')} alt='logo' className="logo" />
        <div className='list'>
          <NavLink exact to='/' activeClassName='lightbg'>MOVEVI</NavLink>
          <NavLink  to='/product'  activeClassName='lightbg'>PRODUCT</NavLink>
          <NavLink  to='/software'  activeClassName='lightbg'>SOFTWARE</NavLink>
          <NavLink  to='/brand'  activeClassName='lightbg'>BRAND</NavLink>
          <NavLink  to='/vip'  activeClassName='lightbg'>VIP</NavLink>
          <NavLink  to='/new'  activeClassName='lightbg'>NEWS</NavLink>
        </div>
        <Button className='buy' type="danger">购买</Button>
      </div>
    )
  }
}
export default Header;