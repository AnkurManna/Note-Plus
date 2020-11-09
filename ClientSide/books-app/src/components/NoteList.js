import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';
export default function NoteList () {
  const [tasks,setTasks] = useState([]);
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

    return (
      <>
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
      </>
    )
  
}