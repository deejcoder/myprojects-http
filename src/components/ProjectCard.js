import React from 'react';
import { Card, Tag, H5 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import ProjectStatusIcon from './ProjectStatusIcon';


export default class ProjectCard extends React.Component {


    render() {

        let project = this.props.project

        return (
            <Card interactive={true}>
                <H5 className="cardHeader">
                    {/* Title */}
                    <Link to={`/project/${project._id}`}>{project.title}</Link>

                    <ProjectStatusIcon project={project} />
                </H5>

                {/* Summary/Description */}
                <p>{project.summary}</p>

                {/* Tags */}
                {project.tags.map((tag, i) => 
                    <Tag key={i} round minimal style={{ marginRight: "5px"}}>{tag}</Tag>
                )}
            </Card>
        );
    }
}
