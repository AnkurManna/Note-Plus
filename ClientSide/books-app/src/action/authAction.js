import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    } from './types';
import {returnErrors} from './errorAction';
//Check token and load user 

export const loadUser = () => (dispatch, getState) => {
    //User loading 
    dispatch({type : USER_LOADING});

    axios.get('http://localhost:4000/api/v1/user',tokenConfig(getState))
    .then(res => dispatch({ type :USER_LOADED, payload: res.data.data}))
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status));
        dispatch({
            type:AUTH_ERROR
        })
    })
}

export const register = ({name,email,password}) => dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name,email,password});

    axios.post('http://localhost:4000/api/v1/users/',body,config)
    .then(res =>dispatch({type: REGISTER_SUCCESS,payload: res.data}))
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        });

    });
    
}
//login

export const login = ({email,password}) => dispatch =>{

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email,password});

    axios.post('http://localhost:4000/api/v1/auth/',body,config)
    .then(res =>dispatch({type: LOGIN_SUCCESS,payload: res.data}))
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        });

    });
    
}

export const logout = () => {
    return { type:LOGOUT_SUCCESS}
}

export const tokenConfig = getState =>{

    //Get token from localStorage
    const token = getState().auth.token;
    //Headers:
    const config = {
        headers :{
            "Content-Type": "application/json"
        }
    }

    //If token ,add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;

}
