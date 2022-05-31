import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from './img/logo.svg';
import './Navbar.scss';

// icons
import { IoCloseOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

function Navbar(props) {

  // 首頁 Navbar 樣式
  const { bannerHeight } = props
  const [ pageYOffset, setPageYOffset ] = useState()
  let getURL = useLocation();
  window.addEventListener('scroll',()=>{
    setPageYOffset(window.pageYOffset)
  })
  useEffect(()=>{
    if (getURL.pathname === '/') {
      document.querySelector('.coffeeNavbar').style.position = 'absolute'
      document.querySelector('.coffeeNavbar').style.top = '-125px'
        if (pageYOffset >= bannerHeight) {
          document.querySelector('.coffeeNavbar').style.position = 'fixed'
          document.querySelector('.coffeeNavbar').style.top = '0px'
        }else{
          document.querySelector('.coffeeNavbar').style.top = '-125px'
        }
      
    }else{
      document.querySelector('.coffeeNavbar').style.position = 'relative'
      document.querySelector('.coffeeNavbar').style.top = '0px'
    }
  },[bannerHeight, getURL.pathname, pageYOffset]);


  // 手機板 navbar js
  const openSideNavClick = () => {
    document.querySelector('.navFirst').style.left = '0px';
    document.querySelector('.sideDark').style.display = 'block';
  }
  const closeSideNavClick = () => {
    document.querySelector('.navFirst').style.left = '-260px';
    document.querySelector('.sideDark').style.display = 'none';
    document.querySelector('.memberDetail').style.height = '0px';
    window.scrollTo(0, 0);
  }
  const openMemberDetailClick = () => {
    if (document.querySelector('.memberDetail').style.height === '0px') {
      document.querySelector('.memberDetail').style.height = '200px';
    }
    else if (document.querySelector('.memberDetail').style.height === '200px') {
      document.querySelector('.memberDetail').style.height = '0px';
    }
  }


  return (
    <header className="App-header">
      <nav className="coffeeNavbar fixed_nav" id="coffeeNavbar" style={{position: '', top: ''}}>
        <div className="sideDark" onClick={closeSideNavClick}></div>
        <div className="navFirst" style={{ left: '-260px' }}>
          <li className="closeSideNav webNone" onClick={closeSideNavClick}>
            <IoCloseOutline size={30} />
          </li>
          <li className="webNone">
            <a className="" href="#">
              <IoPersonOutline size={20} color={'#4C3410'} />
            </a>
            <p className="openMemberDetail" onClick={openMemberDetailClick}>MEMBER</p>
            <a className="ms-3" href="#">
              <IoExitOutline size={20} color={'#4C3410'} />
            </a>
          </li>
          <div className="memberDetail" style={{ height: '0px' }}>
            <li><a href="" onClick={closeSideNavClick}>訂單查詢</a></li>
            <li><a href="" onClick={closeSideNavClick}>點餐訂單</a></li>
            <li><a href="" onClick={closeSideNavClick}>問答中心</a></li>
            <li><a href="" onClick={closeSideNavClick}>資料維護</a></li>
            <li><a href="" onClick={closeSideNavClick}>密碼修改</a></li>
          </div>
          <li><a href="#" onClick={closeSideNavClick}>HOME<span style={{ color: '#fff' }}>首頁</span></a></li>
          <li><a href="#" onClick={closeSideNavClick}>SHOP<span style={{ color: '#fff' }}>網路商城</span></a></li>
          <li><a href="#" onClick={closeSideNavClick}>BLOG<span style={{ color: '#fff' }}>部落格</span></a></li>
          <li><Link to="/store" onClick={closeSideNavClick}>STORE<span style={{ color: '#fff' }}>門市地圖</span></Link></li>
          <li className="webNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
        </div>
        <div className="openSideNav" style={{ cursor: 'pointer' }} onClick={openSideNavClick}>
          <IoMenuOutline size={30} />
        </div>
        <div>
          <li className="logo"><Link to="/"><img src={logo} alt="logo"></img></Link></li>
        </div>
        <div>
          <li className="mobileNone"><a href="#"><button className="coffeeLightBtn">{">> Order Online"}</button></a></li>
          <li><a><IoCartOutline size={30} style={{ color: '#DDB44A' }} /></a></li>
          <li className="mobileNone position-relative">
            <Link to="/memberLogin"><IoPersonOutline size={30} style={{ color: '#DDB44A' }} /></Link>
            <p className="webUserInfo">
              <span><a href="">會員專區</a></span>
              <span><a href="">訂單查詢</a></span>
              <span><a href="">問答中心</a></span>
              <span><a href="">登出</a></span>
            </p>
          </li>
        </div>
      </nav>
    </header>
  )
}

export default Navbar