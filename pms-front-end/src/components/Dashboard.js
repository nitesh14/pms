import React from 'react';
import ProjectItem from './projects/ProjectItem';
import Createprojectbutton from './projects/Createprojectbutton';

class Dashboard extends React.Component {

    render() {
        return (  
            <div className="container">
                <Createprojectbutton/>
                <br />
                <hr />
                <ProjectItem/>
            </div>
        );
    }
}

export default Dashboard;
