import React from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css'
import Logo from './images/logo.png'

import './styles.css';



export const Header = (props) => {
  return(

<div className = 'headerContainer'>


      <div className = 'logo'>
        <a href="#"><img src = {Logo} className="logologo"/></a>
      </div>





      <div className = 'search'>
       <form align='center'>
          <input className="place_for_search put" type="text" id="text-to-find" placeholder="Искать здесь..." autoFocus/>
            <button className= "button_for_search ton" type="submit"></button>
        </form>
      </div>







      <div className = 'tabs'>
          <ul className="ulTabs">
            <li className=" alls"><div className = 'pointer' onClick={() => props.onPageChange(1)}>Главная</div></li>
            <li><div className=" decoration" onClick={() => props.onPageChange(2)}>Каталог лагерей</div></li>
            <li><div className="decoration" onClick={() => props.onPageChange(3)}>Избранное</div></li>
            <li><div className="decoration" onClick={() => props.onPageChange(4)}>Профиль</div></li>
            <li><div className="decoration" onClick={() => props.onPageChange(5)}>О Нас</div></li>
        </ul>
      </div>

      <div className='signUp'>
          <i class="fa fa-sign-in " aria-hidden="true" />
            <p className = 'logIn'><a href='#'>Войти | Зарегестрироваться</a></p>
      </div>

    </div>

  )
}
