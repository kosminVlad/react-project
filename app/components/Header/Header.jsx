'use client';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { Overlay } from '../Overlay/Overlay';
import { AuthForm } from '../AuthForm/AuthForm';
import Link from 'next/link';
import Styles from './Header.module.css'
import { usePathname } from "next/navigation";



export const Header = (props) => {
  const [popupIsOpened, setPopupIsOpened] = useState(false)

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  const pathname = usePathname();

  return (
    <header className={Styles['header']}>
      <Link href="./index.html" className={Styles['logo']}>
        <img
          className={Styles['logo__image']}
          src="./images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/new"  className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""}`}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/popular" className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : ""}`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="\shooters" className={`${Styles["menu__link"]} ${pathname === "/shooters" ? Styles["menu__link_active"] : ""}`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/runners" className={`${Styles["menu__link"]} ${pathname === "/runners" ? Styles["menu__link_active"] : ""}`}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""}`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/tds" className={`${Styles["menu__link"]} ${pathname === "/tds" ? Styles["menu__link_active"] : ""}`}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles["auth"]}>
      <button className={Styles["auth__button"]} onClick={openPopup}>
          Войти
      </button>
  </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup}/>
      <Popup isOpened={popupIsOpened} close={closePopup}>
          <AuthForm />
      </Popup>

    </header>
  )
}
