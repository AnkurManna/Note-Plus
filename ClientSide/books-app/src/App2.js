import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";


import NoteList from "./components/NoteList";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import {Provider} from 'react-redux';
import store from './store';
function App2()
{
    return (
    
            <Provider store={store}>
            <div className="container">
                
                <br/>
                <NoteList/>

            </div>
            </Provider>
            
        
    )
}

export default App2;