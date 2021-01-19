import React from 'react';
// import logo from './logo.svg';
import {Switch , Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.comp'
// import HatsPage from './pages/HatsPage/HatsPage'
import './App.css';
import ShopPage from './pages/shop-page/shop.comp'




function App() {
  return (
    <div className="App">
      <Route  exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      
    </div>
  );
}

export default App;
