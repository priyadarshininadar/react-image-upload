import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Message } from '../Message';
import { Login } from '../Login';
import { ProtectedRoute } from '../../constants/ProtectedRoute'
import { AuthProvider } from '../../context/authcontext';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Login} />
          <ProtectedRoute path='/message' isPrivate component={Message} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;