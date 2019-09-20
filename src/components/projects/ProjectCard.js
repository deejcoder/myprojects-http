import React from 'react';
import { Card, Tag, H5, Tooltip } from '@blueprintjs/core';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

import { ProjectCardDialog } from '..';
import { SECONDARY_HIGHLIGHTED_TEXT, CARD_BACKGROUND } from '../../const/colours';


const CardWrapper = styled(Card)`
    font-size: 14px;
    background-color: ${CARD_BACKGROUND};
    padding: 30px;
    height: 300px;
    cursor: default;
    border: 0.5px solid ${CARD_BACKGROUND};

    &:hover {
        border: 0.5px solid ${SECONDARY_HIGHLIGHTED_TEXT};
    }

    @media screen and (max-width: 767px) {
        height: 340px;
    }
`

const CardTitle = styled(H5)`
    color: ${SECONDARY_HIGHLIGHTED_TEXT};
`

const CardContent = styled.div`
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
        color: ${SECONDARY_HIGHLIGHTED_TEXT};
    }
`

const FaIconGroup = styled.span`
    font-size: 28px;
    color: ${SECONDARY_HIGHLIGHTED_TEXT};
    float: right;
    cursor: pointer;
    
    * {
        padding: 2px;
    }

    a {
        color: ${SECONDARY_HIGHLIGHTED_TEXT};
        text-decoration: none;
    }
`

export default class ProjectCard extends React.Component {

    render() {

        let project = this.props.project;

        return (
            <CardWrapper interactive={false}>

                <CardContent>

                    <FaIconGroup>
                        {/* Open technical info dialog & button */}
                        <ProjectCardDialog project={project} />
                        {/* View on GitHub button */}
                        <Tooltip content="View on GitHub">
                            <a href={project.projectLink}>
                                <FaGithub />
                            </a>
                        </Tooltip>
                    </FaIconGroup>
                
                    {/* Title */}
                    <CardTitle className="cardHeader">
                        {project.title} 
                    </CardTitle>

                    {/* Summary/Description */}
                    <div>
                        <p>{project.summary}</p>
                    </div>

                </CardContent>

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
