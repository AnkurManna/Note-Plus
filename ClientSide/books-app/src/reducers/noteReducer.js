
import {GET_NOTES,ADD_NOTE,DELETE_NOTE,NOTES_LOADING} from '../action/types';
const initialState = {
    notes : [],
    loading : false
    
};

export default function noteReducer(state=initialState,action)
{
    switch(action.type)
    {
    case  GET_NOTES:
        return {
            ...state,
            notes:action.payload,
            loading:false
        };
        case DELETE_NOTE:
            {
                return { 
                    ...state,
                    notes: state.notes
                }
            };

        case ADD_NOTE:
            console.log("switch block");
            console.log(state.notes);
            console.log(action.payload);
            return {
                ...state,
                notes:[...state.notes,action.payload]
            };
        case NOTES_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
};