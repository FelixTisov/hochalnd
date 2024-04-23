import React from 'react'
import './Header.scss'

function Header() {
  return <div className="header">
    <div className='logo'><img type='svg' alt='логотип' src={require('../../images/logo.svg')}></img></div>
    <div className='nav-container'>
      <div className='nav-item'><span>Что мы предлагаем</span></div>
      <div className='nav-item'><span>Где мы находимся</span></div>
      <div className='nav-item'><span>О компании</span></div>
      <div className='nav-item'><span>Отзывы</span></div>
    </div>
    <div className='contacts'>
      <span>+7 (999) 999-99-99</span>
      <span>info@mail.ru</span>
    </div>
    <button className='header-button'>Стать частью команды</button>
  </div>
}

export default Header