import React, { Component } from 'react';
import { connect} from 'react-redux';
import {Button,Modal,ModalHeader,ModalBody,Form,Label,FormGroup,Input,NavLink,Alert} from 'reactstrap';
import PropTypes from 'prop-types';
import {register} from '../action/authAction';
import {clearErrors} from '../action/errorAction';
class RegisterModal  extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const {error,isAuthenticated} = this.props;
        if(error !== prevProps.error) {
            //Check for register error message
            if(error.id === 'REGISTER_FAIL') {
                this.setState({msg: error.msg.msg});
            }
            else
            {
                this.setState({msg:null});
            }
        }

        if(this.state.modal) {
            if(isAuthenticated)
            {
                this.toggle();
            }
        }
    }

    toggle=()=>
    {
        //clearErrors
        this.props.clearErrors();
        this.setState({modal: !this.state.modal});
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
        console.log(e.target.name,e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        const {name,email,password} = this.state;
        const newUser = {name,email,password};

    this.props.register(newUser);
    
    
    }
    render(){
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register Form</ModalHeader>
                    <ModalBody>
        {this.state.msg?(<Alert color='danger'>{this.state.msg}</Alert>):null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name"  
                                onChange={this.onChange}
                                />
                                <Label for="email">Email</Label>
                                <Input type="text" name="email"  
                                onChange={this.onChange}
                                />

                                <Label for="password">Password</Label>
                                <Input type="text" name="password"  
                                onChange={this.onChange}
                                />

                                <Button color="dark" block>Register</Button>            

                            </FormGroup>    
                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
    
    
}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps,{register,clearErrors})(RegisterModal);
