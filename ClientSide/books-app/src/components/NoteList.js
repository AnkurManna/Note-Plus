import React, { Component }from 'react';
import axios from 'axios';
import {Button, Table,ListGroupItem,ListGroup, Container} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems} from '../action/noteActions';
import PropTypes from 'prop-types';
class  NoteList extends Component  {
  state = { 
    note :[
      {id:1,task:"do this",importance:3},
      {id:2,task:"do this",importance:3}
]}
  
  componentDidMount(){
    this.props.getItems();
  }


    render(){
      const tasks = this.state.note;
    
      return (
        
        <Table>
          <Button color="dark">Add Note</Button>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((tsk,index)=>(
      //console.log(tsk._id,tsk.task);
   
          
        <tr key={index}>
            <td>{index}</td>
            <td>{tsk.task}</td>
            <td>{tsk.importance}</td>
            <td>
              <Button color="success" size="sm" className="mr-2">Edit</Button>
              <Button color="danger" size="sm">Delete</Button>
            </td>
        </tr>
        
        
          
          
      )
    )}
          </tbody>
          
        </Table>
        
        
      )

  }
  
}
NoteList.propTypes = {
  getItems:PropTypes.func.isRequired,
  note : PropTypes.object.isRequired 
}
//export default NoteList;

const mapStateToProps = state =>({
  note:state.note
})
export default connect(mapStateToProps,{getItems})(NoteList);
