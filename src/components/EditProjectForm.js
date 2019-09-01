import React from 'react';
import { Label, InputGroup, HTMLSelect, TagInput, FormGroup, TextArea } from '@blueprintjs/core';


export default class EditProjectForm extends React.Component {

    state = {
        tags: this.props.project.tags
    }

    render() {
        let project = this.props.project;

        return (
            <React.Fragment>
                <Label>
                    Title
                    <InputGroup value={project.title} />
                </Label>
                    
                <Label>
                    Status
                    <HTMLSelect options={["In progress", "Completed"]} value={project.status} />
                </Label>

                <FormGroup
                    label="Tags"
                    labelFor="tags-input"
                >
                    <TagInput id="tags-input" values={this.state.tags} onChange={this._handleChange} />
                </FormGroup>

                <Label>
                    Project Link
                    <InputGroup value={project.projectLink} />
                </Label>

                <Label>
                    Summary
                    <TextArea
                        growVertically
                        value={project.summary}
                        fill
                    />
                </Label>

                <Label>
                    Content
                    <TextArea
                        growVertically
                        value={project.content}
                        fill
                    />
                </Label>

            </React.Fragment>
        )
    }

    _handleChange = (values) => {
        this.setState({ tags: values });
    }
}