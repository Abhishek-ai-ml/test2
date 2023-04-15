import React from 'react'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      welcome to loginpage
      {
        setIsLoggedIn(true) 
      }
    </div>
  )
}

export default Login
