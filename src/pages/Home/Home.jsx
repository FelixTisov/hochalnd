import styles from './Home.module.scss'
import Header from '../../components/header/Header'
import mainScreenBg from '../../images/main-screen-bg.svg'
import woman from '../../images/woman.png'
import man from '../../images/man.png'
import transport from '../../images/transport.svg'
import schedule from '../../images/schedule.svg'
import insurance from '../../images/insurance.svg'
import compensation from '../../images/compensation.svg'
import map from '../../images/map.png'
import production from '../../images/production.png'

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

      <div className={styles.contentColumn}>
        <div className={styles.advantages}>
          <div className={styles.title}>
            <p>
              <span className={styles.leftSpan}>Потому что&nbsp;</span>
              <span className={styles.rightSpan}>здесь</span>
            </p>
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

        <div className={styles.transportation}>
          <div className={styles.title}>
            <p>
              <span className={styles.leftSpan}>
                Бесплатно <br />
                отвезем на автобусе&nbsp;
              </span>
              <span className={styles.rightSpan}>
                на <br />
                работу и обратно
              </span>
            </p>
          </div>
          <div className={styles.map}>
            <img
              type="png"
              alt="Карта"
              src={map}
            ></img>
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.mainInformation}>
            <div className={styles.title}>
              <p>
                <span className={styles.leftSpan}>Hochland&nbsp;</span>
                <span className={styles.rightSpan}>- это</span>
              </p>
            </div>
            <div className={styles.description}>
              <p>
                Hochland – это отличное сочетание возможностей крупной международной компании и
                атмосферы настоящей дружной семьи. Мы занимаемся тем, что лучше всего умеем и любим
                – производим сыр и продвигаем нашу продукцию на рынках более 30 стран мира.
              </p>
              <p>
                Устойчивое развитие – это плод совместных усилий всех сотрудников. В этой теплой
                дружественной атмосфере эксперты Hochland создают продукцию, которую можно встретить
                на прилавке, пожалуй, каждого магазина в России.
              </p>
            </div>
          </div>
          <div className={styles.statistics}></div>
          <img
            type="png"
            alt="Производство"
            src={production}
          ></img>
        </div>
      </div>
    </div>
  )
}

export default Home
