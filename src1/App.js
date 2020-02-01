import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }
  componentDidMount() {

    auth.onAuthStateChanged(async userAuth => {
      // debugger;
      // this.setState({ currentUser: user })
      // console.log(user);

      if (!userAuth) {
        this.setState({ currentUser: userAuth });
        return;

      }
      debugger;
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()

          }
        }, () => {
          console.log(snapShot.data())
        })
      })

    })

  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
