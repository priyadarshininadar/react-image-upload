import React from 'react'
import { useHistory } from 'react-router'
import  {CometChat} from '@cometchat-pro/chat'
import { AUTH_KEY} from '../constants/constants'


const defaultState = {
  user: null,
  IsLoggedIn:false,
  login: async (username) => {},
  logout: () => {},
}

export const AuthContext = React.createContext(defaultState)

export const AuthConsumer = AuthContext.Consumer

export const AuthProvider= ({ children }) => {

  const history = useHistory()
  const [user, setUser] = React.useState(null)
  const [IsLoggedIn, setLoggedIn] = React.useState()
 
  React.useEffect(() => {

    const refresh = async () => {
      const user = await CometChat.getLoggedinUser()
      if(user) {
        setUser(user)
        setLoggedIn(true)
      }
    }
    refresh()

  },[])

  const login = async (username) => {
          
    const UID = username
    if(username) {

      CometChat.createUser(user, AUTH_KEY).then(user => {

        console.log("user created", user);
        CometChat.login(UID, AUTH_KEY).then(data => {

            setUser(data)
            setLoggedIn(true)
            history.push('/message')

        }).catch(error => console.log("Login failed with exception:", { error }));

      }).catch(error => {

        CometChat.login(UID, AUTH_KEY).then(data => {

          setUser(data)
          setLoggedIn(true)
          history.push('/message')

        }).catch(error => console.log("Login failed with exception:", { error }));

      });
      
    } else {
      history.push('/message')
    }
  }

  const logout = async () => {

    CometChat.logout().then(user=>{
      setUser(null)
      setLoggedIn(false)
      history.push('/')
    });  
  }

  return (
    <AuthContext.Provider value={{ user,login, logout,IsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}
