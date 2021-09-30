import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { JSON_API } from '../consts';

export const authContext = createContext();

const INIT_STATE={
    loginUser: '',
}
const reducer = (state=INIT_STATE, action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            return{
                ...state,
                loginUser: action.payload.data
            }
        default:
            break;
    }
}
const AuthContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const addUser = (newUser) => {
        axios.post(`${JSON_API}/registration`, newUser);
    };
    
    const loginSave = () =>{
        let accessToken = localStorage.getItem('accessToken');
        console.log(accessToken)
    }

    const loginUser = async (loginUser) =>{
        await axios.post(`${JSON_API}/login`, loginUser, {}).then(resp => {
            let accessToken = resp.data.accessToken
            let refreshToken = resp.data.refreshToken
            let user ={
                id: resp.data.user.id,
                email: resp.data.user.email,
                role: resp.data.user.role
            }
            loginSave()
            localStorage.setItem('token', 'bearer ' + accessToken)
            localStorage.setItem('refreshToken', 'bearer ' + refreshToken)
            localStorage.setItem('userId', user.id)
            localStorage.setItem('userEmail', user.email)
            localStorage.setItem('userRole', user.role)
            resp.headers.Authorization = 'Bearer ' + accessToken
            dispatch({
                type: "LOGIN_USER",
                payload: resp
            })
            console.log("*************", accessToken, refreshToken, user)
             return resp
        })
        .catch(error =>{
            alert(error)
        })
    }
    
    // const loginUser = (loginUser) =>{
    //     let token = localStorage.getItem('token')
    //     let resp = axios.post(`${JSON_API}/login`, loginUser, {headers: {'Authorization': token}})
    //     console.log(resp)
    //     dispatch({
    //         type: "LOGIN_USER",
    //         payload: resp
    //     })
        // let accessToken = resp.data.accessToken
        // let refreshToken = resp.data.refreshToken
        // let user ={
        //     id: resp.data.user.id,
        //     email: resp.data.user.email,
        //     role: resp.data.user.role
        // }
        // console.log(accessToken, refreshToken, user)

    // }

    return (
        <authContext.Provider
            value={{
                addUser,
                loginUser,
                loginSave

            }}
        >
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;