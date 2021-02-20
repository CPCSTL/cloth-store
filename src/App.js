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
import {connect} from 'react-redux';

import {setCurrenUser} from './redux/user/user.actions'



class App extends Component {
// constructor(props){
//   super(props);
//   this.state ={
//     currentUser : null
//   }
// }



unsubscribeFromAuth = null;


componentDidMount() {
  const {setCurrenUser} = this.props
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      await userRef.onSnapshot(snapShot => {
        setCurrenUser({
            id: snapShot.id,
            ...snapShot.data()
          }
        )
      })
    }
    setCurrenUser(userAuth)
    
  }); 
};

componentWillUnmount(){
  this.unsubscribeFromAuth()
}

 render(props){
  
  return (
    <div className="App">
    <Header   />
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignInandUpPage} />
    </Switch>
      
    </div>
  );
 }
}

const mapDispatchToProps = dispatch => ({
  setCurrenUser: user => dispatch(setCurrenUser(user))
})


export default connect(null,mapDispatchToProps)(App);
