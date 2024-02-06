"use client"
import React, { createContext, useEffect, useReducer } from 'react'

export const authContext = createContext();

const reducer =(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {...state,user:action.payload}
        case "LOGOUT":
            return {...state,user:null}
        default:
            return state;
    }
}

const parenthAuth = ({children}) => {
    const initialState = {user:null};
    const [state,dispatch] = useReducer(reducer,initialState);

    const Login = (data)=>{
        dispatch({type:"LOGIN",payload:data})
    }

    const Logout = ()=>{
        localStorage.removeItem("my-token")
        dispatch({type:"LOGOUT"})
        console.log("logout successfull..")
    }

    useEffect(()=>{
        const getCurrentUser = async() => {
              try{
                 const response = await axios.post("/api/getCurrentUser",token)
                 console.log(response.data.user,"current user fetched")
                 Login(response.data.user)
              }catch(error){
                  consolee.log(error,"something went wrong")
              }
        }
        const token = localStorage.getItem("my-token")
        if(token){
            getCurrentUser()
        }
    },[])
  return (
    <authContext.Provider value={{state,Login,Logout}}>
        {children}
    </authContext.Provider>
  )
}

export default parenthAuth;