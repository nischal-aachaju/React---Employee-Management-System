import React, { createContext } from 'react'
export const AuthDatacontext=createContext()
const AuthContext = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default AuthContext
