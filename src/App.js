import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'



import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {

  //set a initail unsubAuth function
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //firebase.auth().onAuthStateChanged subscribe auth and return unsubscribe function
      //if signin user is an obj if signout user is null, always setState to triger rerender
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //onSnapshot() is a realtime watching document state change method
        //it has method data() to get data and property exist check if data exist
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }
          );
        });
      } else {
        setCurrentUser(userAuth)
        //set currentUser to null
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //this prevent memory leak,cus firebase.auth().onAuthStateChanged() will keep monitoring
    //to check user auth status
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

//without withRouter only the first route get history match location props

//mapDispatchToProps(dispatch) return an obj as props it contains functions for set state
//dispatch is for sending out action to reducer to update state/store,and action we set
// is a function(user) it return {type:"ACTION_NAME",payload:user}