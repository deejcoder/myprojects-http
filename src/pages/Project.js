import React from 'react';

import { Container } from 'react-grid-system';
import { Icon, Spinner, H2, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import APIClient from '../api/APIClient';
import ProjectStatusIcon from '../components/ProjectStatusIcon';
import CloseButton from '../components/CloseButton';


class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            project: null,
        };

        this.params = this.props.match.params;

    }

    // project ids should be substitued with slugs in the near future
    async componentDidMount() {
        let client = new APIClient();
        let project = await client.getProject(this.params.id);
        this.setState({ loading: false, project: project })
    }

    render() {

        const GitHubButton = styled(Button)`
            height: 40px;
            border-radius: 5px;
            transition: background-color .1s;
            &:not(:hover):not(:active) {
                background-color: #ebf1f5;
            }  
        `

        let project = this.state.project;

        return (
            <React.Fragment>
                <CloseButton />

                <Container fluid style={{ maxWidth: 800, marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>

                    {this.state.loading ? (
                        <Spinner intent="primary" size="50"></Spinner>
                    ) : (
                        <div>
                            {/* Header */}
                            <H2>
                                {project.title}
                                <ProjectStatusIcon project={project} />
                            </H2>

                            {/* Content */}
                            <div style={{ fontSize: 16, lineHeight: 1.8 }}>
                                <ReactMarkdown source={project.content} />
                            </div>

                            {/* Footer */}
                            <div className="pageOptions">
                                <a href={project.projectLink} style={{ textDecoration: "none" }}>
                                    <GitHubButton minimal fill intent="primary">
                                        <Icon icon="code" style={{ paddingRight: 15, paddingLeft: 5 }}></Icon>
                                        View on GitHub
                                    </GitHubButton>
                                </a>
                            </div>
                        </div>
                    )}
                </Container>
            </React.Fragment>
        );
    }
}

export default Project;