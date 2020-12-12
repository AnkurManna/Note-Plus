import React from 'react';
import {useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ItemModal from "./components/ItemModal";
import NoteList from "./components/NoteList";
import AppNavbar from "./components/AppNavbar";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import {loadUser} from './action/authAction';

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
                
                <NoteList/>
                </Container>

            </div>
            </Provider>
            
        
    )
}

export default App2;