import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputGroup, InputGroupAddon, Label, Input ,FormGroup} from 'reactstrap';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
export default function CreateNote()  {
    const [newNote,setNewNote] = useState({task:"",importance:""});
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
        
        toggle();
      })
      .catch(err =>{
        console.log(err);
      });

      window.location = '/';
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
        <>
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
        </>
    )
  
}