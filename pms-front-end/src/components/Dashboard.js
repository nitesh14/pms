import React from 'react';
import ProjectItem from './projects/ProjectItem';
import Createprojectbutton from './projects/Createprojectbutton';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from "../action/ProjectActions";

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const { projects } = this.props.projects;
        return (  
            <div className="container">
                <Createprojectbutton/>
                <br />
                <hr />
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        );
    }
}

Dashboard.propTypes = {
    projects: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => (
    {
        projects: state.projects
    });

export default connect(mapStateToProps, { getProjects })(Dashboard);
