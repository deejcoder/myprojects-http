import React from 'react';

import { Container } from 'react-grid-system';
import { Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';


class Project extends React.Component {
    render() {

        const { params } = this.props.match;

        return (
            <div className="project">
                <Link to="/">
                    <Icon icon="cross" iconSize={25} />
                </Link>
                <Container>
                    <h1>Project {params.slug}</h1>
                </Container>
            </div>
        );
    }
}

export default Project;