import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //set a initail unsubAuth function
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //firebase.auth().onAuthStateChanged subscribe auth and return unsubscribe function
      //if signin user is an obj if signout user is null, always setState to triger rerender
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //onSnapshot() is a realtime watching document state change method
        //it has method data() to get data and property exist check if data exist
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state)
        });
      } else {
        this.setState({ currentUser: null })
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

//without withRouter only the first route get history match location props