import React from 'react';
import { Card, Tag, H5, Tooltip } from '@blueprintjs/core';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import { ProjectCardDialog } from '../components';


const CardWrapper = styled(Card)`
    font-size: 14px;
    background-color: #252526;
    padding: 30px;
    height: 300px;
    cursor: default;
    border: 0.5px solid #252526;

    &:hover {
        border: 0.5px solid #519ABA;
    }
`

const CardTitleWrapper = styled(H5)`
    color: #519ABA;
`

const CardContentWrapper = styled.div`
    margin-bottom: 25px;
    display: block !important;
`

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;

    position: absolute;
    bottom: 0;
    left: 0;

    margin-bottom: 30px;
    margin-right: 21.5px;
    margin-left: 21.5px;
`

const TagWrapper = styled(Tag)`
    margin-right: 5px;
    background-color: rgba(0, 0, 0, 0) !important;
    font-family: "Open Sans";
    span {
        color: #519ABA;
    }
`

const FaIconGroupWrapper = styled.span`
    font-size: 24px;
    color: #519ABA;
    float: right;
    cursor: pointer;
    
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
            <CardWrapper interactive={false}>

                <CardContentWrapper>

                    <FaIconGroupWrapper>
                        {/* Open technical info dialog & button */}
                        <ProjectCardDialog project={project} />
                        {/* View on GitHub button */}
                        <Tooltip content="View on GitHub">
                            <a href={project.projectLink}>
                                <FaGithub />
                            </a>
                        </Tooltip>
                    </FaIconGroupWrapper>
                
                    {/* Title */}
                    <CardTitleWrapper className="cardHeader">
                        {project.title} 
                    </CardTitleWrapper>

                    {/* Summary/Description */}
                    <div>
                        <p>{project.summary}</p>
                    </div>

                </CardContentWrapper>

                {/* Tags */}
                <Tags>
                    {project.tags.map((tag, i) => 
                        <TagWrapper key={i} round minimal>{tag}</TagWrapper>
                    )}
                </Tags>

            </CardWrapper>
        );
    }
}
