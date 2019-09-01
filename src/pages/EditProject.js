import React from 'react';
import { Redirect } from 'react-router-dom';
import { H2, Intent, Button } from '@blueprintjs/core';

import APIClient from '../api/APIClient';
import EditProjectForm from '../components/EditProjectForm';
import PageContainer from '../components/PageContainer';
import BackButton from '../components/BackButton';
import LoadingSpinner from '../components/LoadingSpinner';


export default class EditProject extends React.Component {

    state = {
        loading: true,
        validated: false,
        project: null,
    }

    async componentDidMount() {
        let client = new APIClient();
        let validated = await client.checkValidation();

        if(validated) {
            let pid = this.props.match.params.id;
            this.setState({ 
                loading: false, 
                validated: validated, 
                project: await client.getProject(pid)
            });
            return;
        }
        this.setState({ loading: false })
    }
    render() {

        let { loading, validated, project } = this.state;
        console.log(loading, validated)

        if(!loading) {
            return (
                <React.Fragment>
                    {validated ? (
                        <React.Fragment>
                            <BackButton />
                            <PageContainer>
                                <H2>Editing {project.title}</H2>
                                <EditProjectForm project={project} />
                                <Button intent={Intent.PRIMARY}>Save</Button>
                            </PageContainer>
                        </React.Fragment>
                    ) : (
                        <Redirect to="/" />
                    )}
                </React.Fragment>
            )
        }
        return (
            <LoadingSpinner />
        )
    }
}