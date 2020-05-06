import React from 'react';
import { Link } from 'react-router-dom';

const Createprojectbutton = () => {
    return (
        <React.Fragment>
            <Link to="/addtask" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
            </Link>
        </React.Fragment>
    );
}

export default Createprojectbutton;