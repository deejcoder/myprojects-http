import React from 'react';
import { Card, Tag, H5, Icon, Classes } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import ProjectHeaderDialog from './ProjectHeaderDialog'

export default class ProjectCard extends React.Component {


    render() {

        let project = this.props.project
        let dateCreated = new Date(Date.parse(project.date_created))

        return (
            <Card interactive={true}>
                <H5 className="cardHeader">
                    {/* Title */}
                    <ProjectHeaderDialog project={project} />

                    {/* Status icon */}
                    { project.status === "completed" ? (
                        <Icon icon="tick-circle" intent="primary" htmlTitle={`Completed on ${dateCreated}`} style={{ paddingLeft: "10px" }} />
                    ) : (
                        <Icon icon="trending-up" intent="warning" htmlTitle="In progress" style={{ paddingLeft: "10px" }} />
                    )}
                </H5>

                {/* Summary/Description */}
                <p>{project.summary}</p>

                {/* Tags */}
                {project.tags.map((tag, i) => 
                    <Tag key={i} rounded={true} style={{ marginRight: "3px"}}>{tag}</Tag>
                )}
            </Card>
        );
    }
}
