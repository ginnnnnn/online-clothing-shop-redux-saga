import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component';





class App extends React.Component {

  //set a initail unsubAuth function
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //firebase.auth().onAuthStateChanged subscribe auth and return unsubscribe function
      //if signin user is an obj if signout user is null, always setState to triger rerender
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //onSnapshot() is a realtime watching document state change method
        //it has method data() to get data and property exist check if data exist
        this.unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
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

    // addCollectionAndDocuments('itemCollections', collectionArray.map(({ title, items }) => ({ title, items })))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ?
                (<Redirect to='/' />)
                : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//without withRouter only the first route get history match location props

//mapDispatchToProps(dispatch) return an obj as props it contains functions for set state
//dispatch is for sending out action to reducer to update state/store,and action we set
// is a function(user) it return {type:"ACTION_NAME",payload:user}