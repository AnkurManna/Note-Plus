
import React,{useState,useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Label, Input ,FormGroup} from 'reactstrap';
import axios from 'axios';
import {Button, Table} from 'reactstrap';

import './App.css';
import Card from './Card';
function App() {
  const [tasks,setTasks] = useState([]);
  const [newNote,setNewNote] = useState({task:"",importance:""});
  const getData = async () =>
  {
    const res = await axios.get('http://localhost:4000/api/v1/tasks');
    

    setTasks(res.data.data.tasks);
    console.log(res.data);
    console.log(tasks);
    
  }
 
  useEffect(() => {
    getData();
  },[]);

  const  taskes = () => tasks.map((tsk,index)=>{
    //console.log(tsk.id,tsk.task);
    return (
        <>
        
        <tr key={index}>
            <td>{index}</td>
            <td>{tsk.task}</td>
            <td>{tsk.importance}</td>
            <td>
              <Button color="success" size="sm" className="mr-2">Edit</Button>
              <Button color="danger" size="sm">Delete</Button>
            </td>
        </tr>
        
        </>
        
    );
  });

  const [modalIsOpen,setmodalIsOpen] = useState(false);
  const toggle = () =>
  {
    setmodalIsOpen(!modalIsOpen);
  } 

  const addNote = () =>
  {
    axios.post('http://localhost:4000/api/v1/tasks',newNote)
    .then(response => {
      console.log(response);
      getData();
      toggle();
    })
    .catch(err =>{
      console.log(err);
    });
  }
  

  const changeText = (e) =>
  {
    //e.preventdefault();
    const {name,value} = e.target;
    console.log(name,value);
    setNewNote(prevState => ({
      ...prevState,[name]:value
    }))
    console.log(newNote);
  }

  return (

    
    <div className="App">
      <Button color="danger" onClick={toggle}>Add a Note</Button>
      <Modal isOpen={modalIsOpen} toggle={toggle} className="newNote">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <FormGroup>
            <Label for="title">Title</Label>
            <Input type="email" name="task" id="exampleEmail"  onChange={changeText}/>
          
            <Label for="title">Title</Label>
            <Input type="textarea" name="importance" id="exampleEmail"  onChange={changeText}/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addNote}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks&&tasks.map((tsk,index)=>{
    //console.log(tsk._id,tsk.task);
    return (
      <>
        
      <tr key={index}>
          <td>{index}</td>
          <td>{tsk.task}</td>
          <td>{tsk.importance}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">Edit</Button>
            <Button color="danger" size="sm">Delete</Button>
          </td>
      </tr>
      
      </>
        
        
    );
  })}
        </tbody>
        
      </Table>
    </div>
    
  );
}
/*
function App(){
  const [books, setBooks] =  useState([]);

  const apiURL = "http://localhost:4000/api/v1/tasks";

  const fetchData =  () => {
      axios.get(apiURL)
      .then(response => {

        setBooks(response.data.data.tasks) ;
        console.log(typeof (books));
        console.log(books);
        console.log(response.data.data);
      })
      .catch(err =>{
        console.log(err);
      })

     

     
  }

  const ShowData = () =>
  {
    console.log(books);
    books.map((book, index) => {
      console.log(book.task);
    })
  }

  return (
    <div className="App">
    <h1>Game of Thrones Books</h1>
    <h2>Fetch a list from an API and display it</h2>


    <div>
      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>

      <button className="fetch-button" onClick={ShowData}>
        Fetch Data
      </button>
    </div>

    
    <div className="books">
    {books &&
          books.map((book, index) => {
            

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.task}</h2>

                <div className="details">
                  
                  <p>📖: {book.importance} pages</p>
              
                </div>
              </div>
            );
          })} 
      </div>

  </div>
  );
}
*/
export default App;

