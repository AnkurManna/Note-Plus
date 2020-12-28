import {GET_FOLDERS,ADD_FOLDER,DELETE_FOLDER,FOLDERS_LOADING} from './types';
import axios from 'axios';
import {tokenConfig} from './authAction';
import {returnErrors} from './errorAction';

export const getFolders = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('http://localhost:4000/api/v1/folders')
    .then (res => dispatch({ 
        type :GET_FOLDERS,
        payload:res.data.data.folders
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data,err.response.status));
    })
};

export const deleteFolder = (id) =>(dispatch,getState) => {
    axios.delete(`http://localhost:4000/api/v1/foldes/${id}`,tokenConfig(getState))
    .then(res =>dispatch({
        type: DELETE_FOLDER,
        payload: id
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data,err.response.status));
    })
};

export const addItem = (note) =>(dispatch,getState)=> {
   
    axios.post('http://localhost:4000/api/v1/tasks',note,tokenConfig(getState))
    .then(res =>dispatch({type:ADD_FOLDER,payload:res.data}));
};

export const setItemsLoading = () => {
    return{
        type:FOLDERS_LOADING
    }
}