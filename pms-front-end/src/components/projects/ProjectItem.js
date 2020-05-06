import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProject } from "../../action/ProjectActions";
import {Link} from 'react-router-dom';

class ProjectItem extends React.Component {

    onDeleteClick = id => {
        console.log("delete method called");
        this.props.deleteProject(id);
    };

    render() {
        const { project } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>{project.status}</h3>
                            </div>
                        </div>
                        <div className="card mb-1 bg-light">
                            <div className="card-header text-primary">
                                ID: {project.id} -- Priority: {project.priority}
                                </div>
                            <div className="card-body bg-light">
                                <h5 className="card-title">{project.projectTask}</h5>
                                <p className="card-text text-truncate ">
                                    {project.acceptCriteria}
                                </p>
                                <Link to={`/updateproject/${project.id}`}>
                                    <li className="btn btn-primary">
                                        View / Update
                                    </li>
                                </Link>
                                <button className="btn btn-danger ml-4"
                                    onClick={this.onDeleteClick.bind(this, project.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProjectItem.propTypes = {
    deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);