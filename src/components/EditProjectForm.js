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
    Callout,
    ControlGroup
} from '@blueprintjs/core';

import { ProjectStore } from '../api';


export default class EditProjectForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // statuses
            updating: false,
            errors: null,
            updated: false,

            deleting: false,
            deleted: false,

            errorMessage: null,

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
        let project = this.props.project;
        this.setState({ updating: true });

        ProjectStore.updateProject({ 
            id: project._id, 
            project: {
                _id: project._id,
                title: this.state.title,
                status: this.state.status,
                tags: this.state.tags,
                projectLink: this.state.projectLink,
                summary: this.state.summary,
                content: this.state.content,
            }
        }).then((reply) => {
            if(!reply.updated) {
                this.setState({ updating: false, updated: false, errorMessage: reply.message, errors: reply.errors})
                return
            }
            this.setState({ updating: false, errorMessage: null, updated: true, errors: null });
        })
    }

    deleteProject = () => {
        this.setState({ deleting: true });
        
        ProjectStore.deleteProject(this.props.project._id).then(() => {
            this.setState({ deleted: true, deleting: false });
        });
    }

    render() {

        return (
            <React.Fragment>
                {this.state.deleted && <Redirect to="/" />}

                {this.state.updated && 
                    <Callout title="Success!" intent={Intent.SUCCESS} style={{ marginBottom: 20 }}>
                        The project was successfully updated.
                    </Callout>

                }
                {this.state.errorMessage !== null &&
                    <Callout title="Error" intent={Intent.DANGER} style={{ marginBottom: 20 }}>
                        {this.state.errorMessage}
                        {this.state.errors &&
                            <ul>
                                {this.state.errors.map((e, i) => 
                                    <li key={i}>{e.error}</li>
                                )}
                            </ul>
                        }
                    </Callout>
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
                        loading={this.state.updating ? true : false}
                        intent={Intent.WARNING}
                        onClick={this.updateProject}
                    >
                        Save
                    </Button>
                    <Button
                        loading={this.state.deleting ? true : false}
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