import './Home.scss'
import Header from '../../components/header/Header'
import mainScreenBg from '../../images/main-screen-bg.svg'
import woman from '../../images/woman.png'
import man from '../../images/man.png'
import transport from '../../images/transport.svg'
import schedule from '../../images/schedule.svg'
import insurance from '../../images/insurance.svg'
import compensation from '../../images/compensation.svg'

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
              src={mainScreenBg}
            ></img>
            <img
              className="main-scrren_woman-image"
              type="png"
              alt="женщина"
              src={woman}
            ></img>
            <img
              className="main-scrren_man-image"
              type="png"
              alt="мужцина"
              src={man}
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
              src={transport}
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
              src={schedule}
            ></img>
            <span>График 2/2</span>
          </div>

          <div className="advantages_item">
            <img
              type="svg"
              alt="Медицинская страховка"
              src={insurance}
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
              src={compensation}
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
