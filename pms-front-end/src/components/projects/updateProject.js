import React from 'react';
import { Link } from 'react-router-dom';
import { updateTask, getProject } from "../../action/ProjectActions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class updateProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectTask: "",
            acceptCriteria: " ",
            priority: " ",
            status: " ",
            dueDate: " "
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        const {
            id,
            projectTask,
            acceptCriteria,
            priority,
            status,
            dueDate
        } = nextProps.project;
        this.setState({
            id,
            projectTask,
            acceptCriteria,
            priority,
            status,
            dueDate
        });
    }

    onChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const updateProject = {
            id: this.state.id,
            projectTask: this.state.projectTask,
            acceptCriteria: this.state.acceptCriteria,
            priority: this.state.priority,
            status: this.state.status,
            dueDate: this.state.dueDate,
        };
        this.props.updateTask(updateProject, this.props.history);
    }

    render() {
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Back to Project Board
                            </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <p className="lead text-center">Project Name + Project Code</p>
                            <form onSubmit = {this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Project Task summary"
                                        name="projectTask" value={this.state.projectTask} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria"
                                        name="acceptCriteria" value={this.state.acceptCriteria} onChange={this.onChange} ></textarea>
                                </div>
                                <h6>Due Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg"
                                        name="dueDate" value={this.state.dueDate} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="priority" onChange={this.onChange}>
                                        <option value={0}>Select Priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="status" onChange={this.onChange}>
                                        <option value="">Select Status</option>
                                        <option value="TO DO">TO DO</option>
                                        <option value="IN PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

updateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project: state.projects.project
});

export default connect(mapStateToProps, {getProject, updateTask})(updateProject);

