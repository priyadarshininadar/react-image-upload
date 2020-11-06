import React from 'react'
import {CometChatGroupListScreen } from "../../CometChat";
import { AuthContext } from '../../context/authcontext'

import './style.css';

export const  Message = () => {
  
  const {logout} = React.useContext(AuthContext)

  return(
    <div className="wrapper">
      <div className="button__container">
        <button className="button" onClick={logout}>LOGOUT</button>
      </div>
      <div className="chat__container">
        <CometChatGroupListScreen />
      </div>
    </div>
  )
}