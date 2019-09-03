import React from 'react';
import {
    InputGroup,
    HTMLSelect,
    TagInput,
    FormGroup,
    TextArea,
    Button,
    Intent,
    Callout 
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

    handleChange = (event) => {
        let name = event.target.name, value = event.target.value;
        this.setState({ [name]: value })
    }

    handleTagsUpdate = (values) => {
        this.setState({ tags: values });
    }

    updateProject = () => {
        let project = this.props.project;
        this.setState({ updating: true });

        // rebuild the project object, and send an update request
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
        }).then(() => {
            this.setState({ updating: false, updated: true, errors: null });
        }).catch((errorResp) => {
            console.log(errorResp)
            this.setState({ updating: false, updated: false, errors: errorResp.formErrors||null });
        })
    }

    render() {

        let errors;
        if(this.state.errors !== null) {
            errors = Object.keys(this.state.errors).map((field) => {
                return <li key={field}>{this.state.errors[field]}</li>
            })
        }

        return (
            <React.Fragment>

                {this.state.updated && 
                    <Callout title="Success!" intent={Intent.SUCCESS} style={{ marginBottom: 20 }}>
                        The project was successfully updated.
                    </Callout>

                }
                {this.state.errors !== null &&
                    <Callout title="Error" intent={Intent.DANGER} style={{ marginBottom: 20 }}>
                        There were a few errors while trying to save your changes,
                        <ul>
                            {errors}
                        </ul>
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

                <Button 
                    loading={this.state.updating ? true : false}
                    intent={Intent.PRIMARY}
                    onClick={this.updateProject}
                >
                    Save
                </Button>

            </React.Fragment>
        )
    }
}