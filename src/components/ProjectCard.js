import React from 'react';
import { Card, Tag, H5, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default class ProjectCard extends React.Component {

    render() {

        return (
            <Card interactive={true}>
                <H5>
                    <Link to={`/project/${this.props.project.ID}`}>{this.props.project.Title}</Link>
                    { this.props.project.Status === "completed" ? (
                        <Icon icon="tick-circle" intent="primary" style={{ paddingLeft: "10px" }}></Icon>
                    ) : (
                        <Icon icon="trending-up" intent="warning" style={{ paddingLeft: "10px" }}></Icon>
                    )}
                    
                </H5>

                <p>{this.props.project.Summary}</p>

                {this.props.project.Tags.map((tag, i) => <Tag key={i} rounded={true} style={{ marginRight: "3px"}}>{tag}</Tag>)}
            </Card>
        );
    }
}
