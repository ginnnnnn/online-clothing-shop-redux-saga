import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { GlobalStyle } from './global.styles'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';



const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));



//suspense fas fallback property and it takes a Element or a component as value
//lazy takes one parameter as function return a import('componete path')

function App({ checkUserSession, currentUser }) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])


  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              currentUser ?
                (<Redirect to='/' />)
                : <SignInAndSignUpPage />} />
        </Suspense>

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

//GlobalStyle applied by passing as an element at the top of the app ,use createGlobalStyle method
// provided by styled-component libray