import React from 'react';
import { Card, Tag, H5, Tooltip } from '@blueprintjs/core';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import { ProjectCardDialog } from '../components';


const CardWrapper = styled(Card)`
    font-size: 14px;
    background-color: #252526;
    padding: 30px;
`

const TitleWrapper = styled(H5)`
    color: #519ABA;
`

const CardContentWrapper = styled.div`
    margin-bottom: 25px;

`

const TagWrapper = styled(Tag)`
    background-color: rgba(0, 0, 0, 0) !important;
    font-family: MONOSPACE;
    span {
        color: #519ABA;
    }
`

const FaIconGroupWrapper = styled.span`
    font-size: 24px;
    color: #519ABA;
    float: right;
    
    * {
        padding: 2px;
    }

    a {
        color: #519ABA;
        text-decoration: none;
    }
`

export default class ProjectCard extends React.Component {

    render() {

        let project = this.props.project;

        return (
            <CardWrapper interactive={true}>

                <CardContentWrapper>

                    {/* <ProjectStatusIcon project={project} /> */}
                    <FaIconGroupWrapper>
                        <ProjectCardDialog project={project} />
                        <Tooltip content="View on GitHub">
                            <a href={project.projectLink}>
                                <FaGithub />
                            </a>
                        </Tooltip>
                    </FaIconGroupWrapper>
                
                    <TitleWrapper className="cardHeader" style={{ width: 100 }}>
                        {project.title} 
                    </TitleWrapper>

                    {/* Summary/Description */}
                    <p>{project.summary}</p>

                </CardContentWrapper>
                {/* Tags */}
                {project.tags.map((tag, i) => 
                    <TagWrapper key={i} round minimal style={{ marginRight: "5px"}}>{tag}</TagWrapper>
                )}

            </CardWrapper>
        );
    }
}
