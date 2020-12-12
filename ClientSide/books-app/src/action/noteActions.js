import {GET_NOTES,ADD_NOTE,DELETE_NOTE,NOTES_LOADING} from './types';
import axios from 'axios';
import {tokenConfig} from './authAction';
import {returnErrors} from './errorAction';

export const getItems = () => dispatch =>{
    dispatch(setItemsLoading());
    axios.get('http://localhost:4000/api/v1/tasks')
    .then (res => dispatch({ 
        type :GET_NOTES,
        payload:res.data.data.tasks
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data,err.response.status));
    })
};

export const deleteItem = (id) =>(dispatch,getState) => {
    axios.delete(`http://localhost:4000/api/v1/tasks/${id}`,tokenConfig(getState))
    .then(res =>dispatch({
        type: DELETE_NOTE,
        payload: id
    }))
    .catch(err =>{
        dispatch(returnErrors(err.response.data,err.response.status));
    })
};

export const addItem = (note) =>(dispatch,getState)=> {
   
    axios.post('http://localhost:4000/api/v1/tasks',note,tokenConfig(getState))
    .then(res =>dispatch({type:ADD_NOTE,payload:res.data}));
};

export const setItemsLoading = () => {
    return{
        type:NOTES_LOADING
    }
}