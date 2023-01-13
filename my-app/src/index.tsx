import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Whiskey, About, Inventory, SignIn } from './components'
import './styles.css'
import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store'


const myTitle = "Whiskey Inventory"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path="/">
            <Home title={myTitle} />
        </Route>
        <Route path="/inventory">
            <Inventory></Inventory>
        </Route>
        <Route path="/whiskey">
            <Whiskey></Whiskey>
        </Route>
        <Route path="/about">
            <About></About>
        </Route>
        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
    </Provider>
  </FirebaseAppProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);
