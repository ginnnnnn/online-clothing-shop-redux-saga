import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component';





function App({ checkUserSession, currentUser }) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin'
          render={() =>
            currentUser ?
              (<Redirect to='/' />)
              : <SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//without withRouter only the first route get history match location props

//mapDispatchToProps(dispatch) return an obj as props it contains functions for set state
//dispatch is for sending out action to reducer to update state/store,and action we set
// is a function(user) it return {type:"ACTION_NAME",payload:user}