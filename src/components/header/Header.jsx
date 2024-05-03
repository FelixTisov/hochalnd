import styles from './Header.module.scss'
import logo from '../../images/logo.svg'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          type="svg"
          alt="логотип"
          src={logo}
        ></img>
      </div>
      <div className={styles.navigation}>
        <div className={styles.item}>
          <span>Что мы предлагаем</span>
        </div>
        <div className={styles.item}>
          <span>Где мы находимся</span>
        </div>
        <div className={styles.item}>
          <span>О компании</span>
        </div>
        <div className={styles.item}>
          <span>Отзывы</span>
        </div>
      </div>
      <div className={styles.contacts}>
        <a
          className={styles.item}
          href="tel:+79999999999"
        >
          +7 (999) 999-99-99
        </a>
        <a
          className={styles.item}
          href="mailto:info@mail.ru"
        >
          info@mail.ru
        </a>
      </div>
      <button className={styles.headerButton}>Стать частью команды</button>
    </div>
  )
}

export default Header
