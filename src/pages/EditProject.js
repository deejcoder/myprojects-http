import React from 'react';
import styled from 'styled-components';

import { Redirect } from 'react-router-dom';
import { H2, Classes } from '@blueprintjs/core';

import { EditProjectForm, BackButton, LoadingSpinner } from '../components';
import { Auth, ProjectStore } from '../api';
import { Container } from 'react-grid-system';


const PageContainer = styled(Container)`
    max-width: 800px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
`


export default class EditProject extends React.Component {

    state = {
        loading: true,
        validated: false,
        project: null,
    }

    async componentDidMount() {
        document.body.style.backgroundColor = "#1E1E1E";

        let params = this.props.match.params;
        let validated = await Auth.isValidated();

        // validated, get the project to edit
        if(validated) {
            let pid = params.id;
            let proj = await ProjectStore.getProject(pid);
            this.setState({ 
                loading: false, 
                validated: validated, 
                project: proj
            });
            return;
        }
        this.setState({ loading: false })
    }
    render() {

        let { loading, validated, project } = this.state;

        if(!loading) {
            return (
                <div className={Classes.DARK} style={{ marginBottom: 70 }}>
                    {validated ? (
                        <React.Fragment>

                            <BackButton />
                            <PageContainer>
                                <H2>Editing {project.title}</H2>
                                <EditProjectForm project={project} />
                            </PageContainer>
                        </React.Fragment>

                    ) : (
                        <Redirect to="/" />
                    )}
                </div>
            )
        }
        return (
            <LoadingSpinner />
        )
    }
}