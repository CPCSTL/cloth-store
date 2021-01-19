import React from 'react';
// import logo from './logo.svg';
import {Switch , Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.comp'
// import HatsPage from './pages/HatsPage/HatsPage'
import './App.css';
import ShopPage from './pages/shop-page/shop.comp'
import Header from './components/Header/Header.comp'




function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
      
    </div>
  );
}

export default App;
