import {createStore,applyMiddleware,compose} from 'redux';
import {persistStore,persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//what is rootreducer

const loadState = () =>{
    console.log('in load state');
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState===null){
            return undefined;
        }

        return JSON.parse(serializedState);
    }
    catch
    {
        return undefined;
    }
}
const initialState = loadState();
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState,  composeEnhancers(

    applyMiddleware(...middleware)
));

export default store;