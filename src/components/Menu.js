import React from 'react'
import logo from '../img/logo-white.svg'
import {FaRegQuestionCircle} from 'react-icons/fa';

export default function Menu() {
  return (
    <nav>
      <div className="container">
        <div className="nav_row">
          <img src={logo} alt='logo_bold' />
          <ul className="menu_content">
            <li>
              <a href="/">Mi negocio</a>
            </li>
            <li>
              <a href="/">Ayuda <FaRegQuestionCircle /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
