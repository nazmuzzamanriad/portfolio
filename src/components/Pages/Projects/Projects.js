import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
 
    return (
        <div>
        <div>
            <h2 id='projects' style={{fontWeight:'bold'}} >My Projects</h2>
            <div >
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project => <Project
                            key={Project.id}
                            project={project}
                        ></Project>)
                    }
                </Row>
            </div>

        </div>

    </div>
    );
};

export default Projects;