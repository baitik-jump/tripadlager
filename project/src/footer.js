import React from 'react';
import './styles.css'


export const Footer = () => {
  return(
    <div className ='footer'>

        <div className="contact">
          <div className="contacts">
            <h4>Контакты</h4>
            <p></p>
            <ul>

              <li>
                <span><i className="fa fa-phone"></i> (000) 123-45-78</span>
              </li>
              <li>
                <span><i className="fa fa-fax"></i> xxxxx xxxxxxxxxx</span>
              </li>
              <li>
                <span><i className="fa fa-envelope-o"></i> contact@TripAdLager.com</span>
              </li>
            </ul>
          </div>
          <div className="links">
            <h4>Быстрый переход</h4>
            <ul>
              <li><a href="">Главная</a></li>
              <hr/>
              <li><a href="">Каталог лагерей </a></li>
              <hr/>
              <li><a href="">Избранное</a></li>
              <hr/>
              <li><a href="">О нас</a></li>
              <hr/>

            </ul>
          </div>
          <div className="blog">
            <h4>Блог о туризме</h4>
            <h5><a href="#">Гражданам России разрешили вылетать в Германию и....</a></h5>
            <p className="Posted">30.09.2020</p>
            <p>[Вам необязательно читать этот текст!]</p>
          </div>
          <div className="news">
            <h4>Подписка на рассылку горящих путевок</h4>
            <form>
            <input type="text" name="" placeholder="Ваше имя"/>
            <input type="email" name="" placeholder="E-mail"/>
            <input type="submit" className="button"  value="Submit"/>
            </form>
          </div>
          </div>

      <div class="footer-copy">
        <div class="container row">
          <div class="Copy">
            <p>Copyright © 2020 - All Rights Reserved - TripAdLager</p>
          </div>
        </div>
      </div>

    </div>
  )
}
