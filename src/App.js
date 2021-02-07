import React,{Component} from 'react';
// import logo from './logo.svg';
import {Switch , Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.comp'
// import HatsPage from './pages/HatsPage/HatsPage'
import './App.css';
import ShopPage from './pages/shop-page/shop.comp'
import Header from './components/Header/Header.comp'
import SignInandUpPage from './pages/sign-in-and-up/sign-in-up-comp'
import {auth, createUserProfileDocument} from './firbase/firebase.utils'



class App extends Component {
constructor(props){
  super(props);
  this.state ={
    currentUser : null
  }
}



unsubscribeFromAuth = null;


componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      await userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        })
      })
    }
    this.setState({currentUser:userAuth})
    
  }); 
};

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

 render(props){
  return (
    <div className="App">
    <Header currentUser={this.state.currentUser}  />
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInandUpPage} />
    </Switch>
      
    </div>
  );
 }
}

export default App;
