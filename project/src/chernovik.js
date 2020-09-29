------App.js------------

import {Main} from './main';
import {LeftHeader} from './leftHeader';


------------------------
<div className = 'search'>

</div>
<h1>Все лагеря</h1>
<div className = 'mainPages'>
  <div className = 'bigPage'></div>
  <div className = 'actualPage'></div>
  <div className = 'popularPage'></div>
</div>
</div>







export const Catalog = () => {
  return (
    <div className='mainCatalog'>s

    <div className = 'headerContainer'>


        <div className = 'logo'>
          <img src = {Logo}/>
        </div>


        <div className = 'search'>
         <form align='center'>
              <input type="text" placeholder="Искать здесь..."/>
              <button type="submit"></button>
          </form>
        </div>

        <div className = 'tabs'>
            <ul className="ulTabs">
            <li className="fa fa-plus-square-o "><a href="#" className="alls">Каталог лагерей</a></li>
            <li className="fa fa-folder-o"><a href="#" className="decoration">Избранное</a></li>
            <li className="fa fa-address-book-o" aria-hidden="true"><a href="#" className="decoration">Профиль</a></li>
            <li className="fa fa-commenting-o" aria-hidden="true"><a href="#" className="decoration">О Нас</a></li>
          </ul>
        </div>

    </div>



    <h1>Все лагеря</h1>
    <div className ='camps'>
        <div className ='camp first'>

        </div>

        <div className ='camp second'></div>

        <div className ='camp third'></div>

        <div className ='camp fourh'></div>

        <div className ='camp fiveth'></div>

        <div className ='camp sixth'></div>

        <div className ='camp seventh'></div>
    </div>



    </div>
  )
}
