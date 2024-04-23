import React from 'react'
import './Home.scss'
import Header from '../../components/header/Header'

function Home() {
  return (
    <div className="home">
      <div className="main-screen">
        <Header />
        <div className="main-screen_content">
          <div className="main-screen_content-left">
            <div className="title-container">
              <h1>
                В Hochland
                <br />я хочу работать
              </h1>
            </div>
            <span>
              Потому что здесь меня ценят и создают
              <br />
              комфортные и безопасные условия
            </span>
            <button className="button">Стать частью команды</button>
          </div>
          <div className="main-screen_content-right">
            <img
              className="main-scrren_bg-image"
              type="svg"
              alt="задний фон"
              src={require('../../images/main-screen-bg.svg')}
            ></img>
            <img
              className="main-scrren_woman-image"
              type="png"
              alt="женщина"
              src={require('../../images/woman.png')}
            ></img>
            <img
              className="main-scrren_man-image"
              type="png"
              alt="мужцина"
              src={require('../../images/man.png')}
            ></img>
          </div>
        </div>
      </div>

      <div className="advantages">
        <div className="advantages_title">
          <span className="advantages_left-span">Потому что&nbsp;</span>
          <span className="advantages_right-span">здесь</span>
        </div>
        <div className="advantages_details">
          <div className="advantages_item">
            <img
              type="svg"
              alt="Корпоративный транспорт"
              src={require('../../images/transport.svg')}
            ></img>
            <span>
              Корпоративный <br />
              транспорт
            </span>
          </div>

          <div className="advantages_item">
            <img
              type="svg"
              alt="График 2/2"
              src={require('../../images/schedule.svg')}
            ></img>
            <span>График 2/2</span>
          </div>

          <div className="advantages_item">
            <img
              type="svg"
              alt="Медицинская страховка"
              src={require('../../images/insurance.svg')}
            ></img>
            <span>
              Медицинская <br />
              страховка
            </span>
          </div>

          <div className="advantages_item">
            <img
              type="svg"
              alt="Компенсация питания"
              src={require('../../images/compensation.svg')}
            ></img>
            <span>
              Компенсация <br />
              питания
            </span>
          </div>
        </div>
      </div>

      <div className="transportation"></div>
    </div>
  )
}

export default Home
