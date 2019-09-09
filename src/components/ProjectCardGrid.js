import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { H1 } from '@blueprintjs/core';

import { ProjectCard, LoadingSpinner } from '../components';
import { ProjectStore } from '../api';
import styled from 'styled-components';


const TitleWrapper = styled(H1)`
    text-align: center;
    margin-bottom: 50px;
    color: #DBDBDB;
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size: 32px !important;
    line-height: 38px;
`

const ColWrapper = styled(Col)`
    /* Remove padding from columns, replace with margin */
    padding-right: 0px !important;
    padding-left: 0px !important;
    margin-right: 8.5px !important;
    margin-left: 8.5px !important;

    @media screen and (max-width: 767px) {
        margin-right: auto !important;
        margin-left: auto !important;
        margin-bottom: 10px;
        min-width: 343px;
    }
`

const RowWrapper = styled(Row)`
    margin-bottom: 17px;
    overflow: hidden;

    /* Single column, remove bottom margin from row */
    @media screen and (max-width: 767px) {
        margin-bottom: 0 !important;
    }

    @media screen and (max-width: 1200px) {
        marign-left: 20px;
        margin-right: 20px;
    }
`

export default class ProjectCardGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            projects: null,
            screenWidth: null,
            screenHeight: null,
            colWidth: null,
            colPerRow: null,
        }

        this.updateScreenDimensions = this.updateScreenDimensions.bind(this);
    }

    updateScreenDimensions() {
        // note react-grid-system uses container sizes: 1140, 960, 750 for screen sizes 1200, 992 & 768 respectively

        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });

        // calculate how many columns per row, and the width of each column
        let colWidth = null;
        let sw = this.state.screenWidth;

        // how many columns
        let cols = (sw <= 1200) ? 2 : 3;
        cols = (sw <= 767) ? 1 : cols;

        // calculate column with if more than one column
        if(cols > 1) {
            let containerWidth = sw >= 1200 ? 1140 : (sw >= 992 ? 960 : 750);
            colWidth = (containerWidth-(cols*2)*8.5)/cols;
        }

        this.setState({ colWidth: colWidth, colPerRow: cols })
    }
    
    async componentDidMount() {
        let projects = await ProjectStore.getProjectList();
        this.setState({ loading: false, projects: projects});

        this.updateScreenDimensions();
        window.addEventListener('resize', this.updateScreenDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenDimensions);
    }



    render() {

        // wraps a column consisting of one project, inside a row
        const Rows = ({ projects }) => {
            let rows = []
            let row = []

            for(const [i, project] of projects.entries()) {
                row.push(
                    <ColWrapper key={i} xs={2} md={3} xl={3} style={{ minWidth: `${this.state.colWidth}px` }}>
                        <ProjectCard project={project} />
                    </ColWrapper>
                )

                // cols per row, start with index=1
                if((i+1) % this.state.colPerRow === 0 || i+1 === projects.length) {
                    rows.push(row)
                    row = []
                }
            }

            return (
                <React.Fragment>
                    <TitleWrapper>My Projects</TitleWrapper>

                    <Container style={{ lineHeight: '24px'}}>
                        {rows.map((r, i) => <RowWrapper key={i}>{r}</RowWrapper>)}
                    </Container>
                </React.Fragment>
            )
        }

        if(this.state.loading) {
            return (
                <LoadingSpinner />
            )
        }

        return (
            <Rows projects={this.state.projects}></Rows>
        )
    }
}
