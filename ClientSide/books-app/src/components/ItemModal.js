import React, { Component } from 'react';
import { connect} from 'react-redux';
import {Button,Modal,ModalHeader,ModalBody,Form,Label,FormGroup,Input} from 'reactstrap';
import {addItem} from '../action/noteActions';
import PropTypes from 'prop-types';
class ItemModal  extends Component {
    state = {modal: false,task:'',importance:0}

    toggle=()=>
    {
        this.setState({modal: !this.state.modal});
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const newNote = {
            
            task:this.state.task,
            importance:this.state.importance
        };

    this.props.addItem(newNote);
    
    this.toggle();
    }
    render(){
        return (
            <div>
                <Button onClick={this.toggle} color="dark" block>Add Item</Button>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to NoteList</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="task"  
                                onChange={this.onChange}
                                />
                                <Label for="item">Importance</Label>
                                <Input type="text" name="importance"  
                                onChange={this.onChange}
                                />

                                <Button onClick={this.toggle} color="dark" block>Add </Button>
                            </FormGroup>    
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    task: state.task,
    importance:state.importance
})
export default connect(mapStateToProps,{addItem})(ItemModal);
