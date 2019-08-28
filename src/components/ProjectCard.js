import React from 'react';
import { Card, Tag, H5 } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export default class ProjectCard extends React.Component {

    render() {

        return (
            <Card interactive={true}>
                <H5>
                    <Link to={`/project/${this.props.project.ID}`}>{this.props.project.Title}</Link>
                </H5>
                <p>{this.props.project.Summary}</p>

                <Tag rounded={true}
                >Flask</Tag>
            </Card>
        );
    }
}
