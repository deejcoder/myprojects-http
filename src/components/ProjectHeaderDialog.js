import React from 'react';
import { Classes, Dialog, H5, Intent, Button, AnchorButton } from '@blueprintjs/core';
import ReactMarkdown from 'react-markdown';


export default class ProjectHeaderDialog extends React.Component {

    state = {
        isOpen: false
    }

    showDialog = () => {
        this.setState({ isOpen: true });
    }

    hideDialog = () => {
        this.setState({ isOpen: false });
    }

    render() {

        let project = this.props.project

        return (
            <React.Fragment>
                {/* Title of Project Card */}
                <H5 style={{ display: "inline" }}>
                    <a onClick={this.showDialog}>{project.title}</a>
                </H5>

                <Dialog
                    title={project.title}
                    usePortal={true}
                    canEscapeKeyClose={true}
                    canOutsideClickClose={false}
                    onClose={this.hideDialog}
                    {...this.state}
                >
                    {/* Dialog body */}
                    <div className={Classes.DIALOG_BODY}> 
                        <ReactMarkdown source={project.content} />
                    </div>

                    {/* Dialog footer */}
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Button onClick={this.hideDialog}>Close</Button>
                            <AnchorButton
                                intent={Intent.PRIMARY}
                                href={project.projectLink}
                            >
                                See on GitHub
                            </AnchorButton>
                        </div>

                    </div>
                </Dialog>
            </React.Fragment>
                
        )
    }
}