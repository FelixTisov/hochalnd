import styles from './Home.module.scss'
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
    <div className={styles.home}>
      <div className={styles.mainScreen}>
        <Header />
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <div className={styles.title}>
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
            <button className={styles.button}>Стать частью команды</button>
          </div>
          <div className={styles.rightBlock}>
            <img
              className={styles.bgImage}
              type="svg"
              alt="задний фон"
              src={mainScreenBg}
            ></img>
            <img
              className={styles.womanImage}
              type="png"
              alt="женщина"
              src={woman}
            ></img>
            <img
              className={styles.manImage}
              type="png"
              alt="мужцина"
              src={man}
            ></img>
          </div>
        </div>
      </div>

      <div className={styles.advantages}>
        <div className={styles.title}>
          <span className={styles.leftSpan}>Потому что&nbsp;</span>
          <span className={styles.rightSpan}>здесь</span>
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
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

          <div className={styles.item}>
            <img
              type="svg"
              alt="График 2/2"
              src={schedule}
            ></img>
            <span>График 2/2</span>
          </div>

          <div className={styles.item}>
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

          <div className={styles.item}>
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

      <div className={styles.transportation}></div>
    </div>
  )
}

export default Home
