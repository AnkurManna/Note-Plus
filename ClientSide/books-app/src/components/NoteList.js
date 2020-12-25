import React, { Component }from 'react';
import axios from 'axios';
import {Button, Table,ListGroupItem,ListGroup, Container} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../action/noteActions';
import PropTypes from 'prop-types';
class  NoteList extends Component  {

 
  componentDidMount(){
    this.props.getItems();
    console.log(this.props.note);
  }

  onDeleteClick(id){
    this.props.deleteItem(id);
  }


    render(){
    const tasks = this.props.note
   // console.log(tasks);
      return (
        
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
            {tasks.map((tsk,index)=>(
      //console.log(tsk._id,tsk.task);
   
          
        <tr key={index}>
            <td>{index}</td>
            <td>{tsk.task}</td>
            <td>{tsk.importance}</td>
            <td>
              <Button color="success" size="sm" className="mr-2">Edit</Button>
              <Button color="danger" size="sm" 
              onClick={this.onDeleteClick.bind(this,tsk._id)}
              >Delete</Button>
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
  note : PropTypes.object.isRequired,
  deleteItem:PropTypes.func.isRequired

}
//export default NoteList;

const mapStateToProps = state =>(
  /*console.log(state.note.notes),*/
 {
  note:state.note.notes

   
});
export default connect(mapStateToProps,{getItems,deleteItem}
  )(NoteList);

/*
The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
so here we are returning that wrapped component 
*/
