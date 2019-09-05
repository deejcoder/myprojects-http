import React from 'react';
import { H3, Classes, Tooltip, Button, AnchorButton, Intent, Overlay, Card } from '@blueprintjs/core';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { Auth } from '../api';


const DialogBodyWrapper = styled.div`
`

const OverlayCardWrapper = styled(Card)`
    color: #b3b3b3;
    background-color: #1E1E1E !important;
    transform: translate(-50%, -50%);
    top: 45%;
    left: 50%;
    max-width: 750px;
    
    p {
        font-size: 15px !important;
        padding: 10px;
        line-height: 1.6 !important;
    }
`

const OverlayHeaderWrapper = styled(H3)`
    color: #519ABA !important;
`

const OverlayWrapper = styled(Overlay)`
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
`

const ButtonLinkWrapper = styled(Link)`
    text-decoration: none !important;
`

export default class ProjectCardDialog extends React.Component {

    state = {
        isOpen: false,
        hasAuth: false,
    }

    async componentDidMount() {
        this.setState({ hasAuth: await Auth.isValidated() });
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    }

    render() {

        let project = this.props.project;

        return (
            <React.Fragment>
                <Tooltip content="Technical info">
                    <FaInfoCircle onClick={this.handleOpen} />
                </Tooltip>

                <OverlayWrapper
                    onClose={this.handleClose}
                    autoFocus
                    canEscapeKeyClose
                    canOutsideClickClose
                    isOpen={this.state.isOpen}
                    className={Classes.DARK}
                >
                    <OverlayCardWrapper>
                        <OverlayHeaderWrapper>{project.title}</OverlayHeaderWrapper> 
                        <DialogBodyWrapper className={Classes.DIALOG_BODY}>
                            <ReactMarkdown source={project.content} />
                        </DialogBodyWrapper>

                        <div className={Classes.DIALOG_FOOTER}>
                            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                <Button onClick={this.handleClose}>Close</Button>
                                {this.state.hasAuth &&
                                    <ButtonLinkWrapper to={`/project/${project._id}/edit`}>
                                        <Button icon="edit">Edit</Button>
                                    </ButtonLinkWrapper>
                                }
                                <AnchorButton
                                    icon="share"
                                    intent={Intent.PRIMARY}
                                    href={project.projectLink}
                                >
                                    View on GitHub
                                </AnchorButton>
                            </div>
                        </div>
                    </OverlayCardWrapper>

                </OverlayWrapper>

            </React.Fragment>
        );
    }
}