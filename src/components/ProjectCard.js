import React from 'react';
import { Card, Tag, H5, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default class ProjectCard extends React.Component {

    render() {

        let project = this.props.project
        let dateCreated = new Date(Date.parse(project.DateCreated))

        return (
            <Card interactive={true}>
                <H5>
                    {/* Title */}
                    <Link to={`/project/${project.ID}`}>{project.Title}</Link>

                    {/* Status icon */}
                    { project.Status === "completed" ? (
                        <Icon icon="tick-circle" intent="primary" htmlTitle={`Completed on ${dateCreated}`} style={{ paddingLeft: "10px" }} />
                    ) : (
                        <Icon icon="trending-up" intent="warning" htmlTitle="In progress" style={{ paddingLeft: "10px" }} />
                    )}
                </H5>

                {/* Summary/Description */}
                <p>{project.Summary}</p>

                {/* Tags */}
                {project.Tags.map((tag, i) => 
                    <Tag key={i} rounded={true} style={{ marginRight: "3px"}}>{tag}</Tag>
                )}
            </Card>
        );
    }
}
