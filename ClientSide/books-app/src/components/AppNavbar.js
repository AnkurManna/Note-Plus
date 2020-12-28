import React, { useState,Component ,Fragment } from 'react';

import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
NavbarText
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Logout from './Logout';

class AppNavbar extends Component  {

    state = {
        isOpen:false,
    }
    static propTypes = {
        auth: PropTypes.object.isRequired
    };



toggle = () => 
{
    this.setState({ isOpen: !this.state.isOpen });
};

render(){

    const {isAuthenticated,data} = this.props.auth;
    
    

    //console.log(this.props.auth);
    const authLinks = (
        <Fragment>
            <NavItem>
            <span >
    <h6 >{data?`Welcome ${data.name}`:' '}</h6>    
            </span>    
            </NavItem>
            <NavItem><Logout/></NavItem>
        </Fragment>
    );
    const guestLinks = (
        <Fragment>
            <NavItem><RegisterModal/></NavItem>
        <NavItem><LoginModal/></NavItem>

        </Fragment>
    )

return (
    <div>
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">NoteList</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
            Options
            </DropdownToggle>
            <DropdownMenu right>
            <DropdownItem>
                Option 1
            </DropdownItem>
            <DropdownItem>
                Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                Reset
            </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        </Nav>

        <Nav className='ml-auto' navbar>
            {isAuthenticated ? authLinks:guestLinks}
        </Nav>
      
       
    </Collapse>
    </Navbar>
</div>
);
  }
}


const mapStateToProps = (state) =>({
    auth : state.auth
})
export default connect(mapStateToProps,null)(AppNavbar);
