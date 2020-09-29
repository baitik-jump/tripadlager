import React, { useState } from 'react';
import {Main} from './main'
import {Header} from './header';
import {Footer} from './footer';
import {Catalog} from './catalog';
import {Favorites} from './favorites';
import './App.css';
import './styles.css';
import './'


function App() {
  const [activePage, setActivePage] = useState(1);
  console.log(activePage)

  return (
    <div className ="container">
      <Header onPageChange={setActivePage} />
      {activePage === 1 && <Main/>}
      {activePage === 2 && <Catalog/>}
      {activePage === 3 && <Favorites/>}


      <Footer/>

    </div>
  );
}

export default App;
