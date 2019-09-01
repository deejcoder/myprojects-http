import React from 'react';

import { Icon, H2, Button, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { Auth, ProjectStore } from '../api';
import ProjectStatusIcon from '../components/ProjectStatusIcon';
import BackButton from '../components/BackButton';
import LoadingSpinner from '../components/LoadingSpinner';
import PageContainer from '../components/PageContainer';


class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            project: null,
            hasAuth: false,
        };

        this.params = this.props.match.params;

    }

    // project ids should be substitued with slugs in the near future
    async componentDidMount() {
        let project = await ProjectStore.getProject(this.params.id);
        this.setState({ loading: false, project: project })

        if(await Auth.isValidated()) {
            this.setState({ hasAuth: true });
        }
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
                <BackButton />

                {this.state.loading ? (
                    <LoadingSpinner />
                ) : (
                    <PageContainer>
                        {/* Header */}
                        <H2>
                            {project.title}
                            <ProjectStatusIcon project={project} />

                            {this.state.hasAuth &&
                                <Link to={`/project/${this.params.id}/edit`}>
                                    <Button intent={Intent.PRIMARY} style={{ float: "right" }}>Edit</Button>
                                </Link>
                            }
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
                    </PageContainer>
                )}
            </React.Fragment>
        );
    }
}

export default Project;