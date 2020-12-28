import React from 'react';
import {useEffect,State} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ItemModal from "./components/ItemModal";
import NoteList from "./components/NoteList";
//import FolderList from "./components/FolderList";
import AppNavbar from "./components/AppNavbar";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import {loadUser} from './action/authAction';

const saveState = (state) =>{
    console.log('in Saving the state')
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState)
        console.log('localstr',localStorage);
        const val = localStorage.getItem('state')
        console.log(JSON.parse(val));
    }
    catch (err)
    {

    }
}

store.subscribe(()=>{
    console.log('Saving the state')
    saveState(store.getState());
    console.log(store.getState())
    //console.log(localStorage)
})

function App2()
{

    useEffect(() =>{
        store.dispatch(loadUser());

    })
    return (
    
            <Provider store={store}>
            <AppNavbar/>
            <div className="container">
                {console.log(store)}  
                <Container>
                <ItemModal/>
                </Container>
            </div>
            </Provider>
            
        
    )
}

export default App2;