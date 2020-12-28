import React, {Component} from 'react';
import {getFolders,deleteFolder} from '../action/folderActions';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
class FolderList extends Component {

    componentDidMount() {
        this.props.getFolders();
    }

    render() {
        return(
            <div>FolderList</div>
        )
    }

}

FolderList.propTypes =
{
    folders:PropTypes.object.isRequired,
    getFolders:PropTypes.func.isRequired,
    deleteFolder:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ folders: state.folders });

export default  connect(mapStateToProps,{getFolders,deleteFolder})(FolderList);