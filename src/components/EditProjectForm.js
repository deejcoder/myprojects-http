import React from 'react';
import { Redirect } from 'react-router-dom';
import {
    InputGroup,
    HTMLSelect,
    TagInput,
    FormGroup,
    TextArea,
    Button,
    Intent,
    ControlGroup
} from '@blueprintjs/core';

import { ProjectStore } from '../api';
import { StatusCallout } from '../components';


export default class EditProjectForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ok: false,
            loading: false,
            message: null,
            errors: null,
            deleted: false,

            // fields
            title: this.props.project.title,
            status: this.props.project.status,
            tags: this.props.project.tags,
            projectLink: this.props.project.projectLink,
            summary: this.props.project.summary,
            content: this.props.project.content
        }

        this.updateProject = this.updateProject.bind(this);
    }

    // handles whenever a field is modified, updates it
    handleChange = (event) => {
        let name = event.target.name, value = event.target.value;
        this.setState({ [name]: value })
    }

    // handles whenever a project tag is added/removed
    handleTagsUpdate = (values) => {
        this.setState({ tags: values });
    }

    // sends an update request to update the project
    updateProject = () => {
        this.setState({ loading: true });

        let project = this.props.project;
        let { title, status, tags, projectLink, summary, content } = this.state;

        ProjectStore.updateProject({ 
            id: project._id, 
            project: {
                _id: project._id,
                title: title,
                status: status,
                tags: tags,
                projectLink: projectLink,
                summary: summary,
                content: content,
            }
        }).then((reply) => {
            this.setState({ 
                loading: false, 
                ok: reply.ok, 
                message: reply.message, 
                errors: reply.errors
            })
        })
    }

    // sends a request to delete the project
    deleteProject = () => {
        this.setState({ loading: true });
        
        ProjectStore.deleteProject(this.props.project._id).then((deleted) => {
            this.setState({
                loading: false,
                deleted: deleted
            })
        });
    }

    render() {

        let { ok, message, errors, loading } = this.state;

        return (
            <React.Fragment>
                {this.state.deleted && <Redirect to="/" />}
                {message !== null &&
                    <StatusCallout success={ok} message={message} errors={errors} />
                }

                <FormGroup label="Title" labelFor="title" labelInfo="(required)">
                    <InputGroup name='title' onChange={this.handleChange} value={this.state.title} />
                </FormGroup>
                    
                <FormGroup label="Status" labelFor="status" labelInfo="(required)">
                    <HTMLSelect name='status' onChange={this.handleChange} options={["In progress", "Completed"]} value={this.state.status} />
                </FormGroup>

                <FormGroup label="Tags" labelFor="tags-input">
                    <TagInput id="tags-input" name='tags' onChange={this.handleTagsUpdate} values={this.state.tags} />
                </FormGroup>

                <FormGroup label="Project link" labelFor="projectLink">
                    <InputGroup name='projectLink' onChange={this.handleChange} value={this.state.projectLink} />
                </FormGroup>

                <FormGroup label="Summary" labelFor="summary" labelInfo="(required)">
                    <TextArea
                        name='summary'
                        onChange={this.handleChange}
                        growVertically
                        value={this.state.summary}
                        fill
                    />
                </FormGroup>

                <FormGroup label="Content" labelFor="content" labelInfo="(required)">
                    <TextArea
                        name='content'
                        onChange={this.handleChange}
                        growVertically
                        value={this.state.content}
                        fill
                    />
                </FormGroup>

                <ControlGroup>
                    <Button 
                        loading={loading ? true : false}
                        intent={Intent.WARNING}
                        onClick={this.updateProject}
                    >
                        Save
                    </Button>
                    <Button
                        loading={loading ? true : false}
                        intent={Intent.DANGER}
                        onClick={this.deleteProject}
                    >
                        Delete
                    </Button>
                </ControlGroup>

            </React.Fragment>
        )
    }
}