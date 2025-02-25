import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound'
import View from './View'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AppContainer>
      <BloomHeader/>
      <Header isLoggedIn={isLoggedIn}/>
      <RouteContainer>
        <Switch>
          <Route exact path="/" render={() => <Login setIsLoggedIn={setIsLoggedIn}/>} />      
          <Route exact path="/login" render={() => <Login setIsLoggedIn={setIsLoggedIn} />} />    
          {isLoggedIn && <PrivateRoute exact path="/logout" render={() => <Logout setIsLoggedIn={setIsLoggedIn}/>}/>}
          {isLoggedIn && <PrivateRoute exact path="/view" render={() => <View />} />}
          <Route render={() => <NotFound /> } /> 
        </Switch>       
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
