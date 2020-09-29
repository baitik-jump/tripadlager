import React, { useState } from 'react';
import {Main} from './main'
import {Header} from './header';
import {Footer} from './footer';
import {Catalog} from './catalog';
import {Favorites} from './favorites';
import {Profile} from './profile';
import {About} from './about';

import './App.css';
import './styles.css';


function App() {
  const [activePage, setActivePage] = useState(1);
  console.log(activePage)

  return (
    <div className ="container">
      <Header onPageChange={setActivePage} />
      {activePage === 1 && <Main/>}
      {activePage === 2 && <Catalog/>}
      {activePage === 3 && <Favorites/>}
      {activePage === 4 && <Profile/>}
      {activePage === 5 && <About/>}
      <Footer/>



    </div>
  );
}

export default App;
