
import {GET_NOTES,ADD_NOTE,DELETE_NOTE} from '../action/types';
const initialState = {
    notes : [
        {id:1,task:"DO this",importance:23}
    ]
};

export default function(state=initialState,action)
{
    switch(action.type) {
       case  GET_NOTES:
           return {
               ...state
           }

           default:
               return state;
    }
};