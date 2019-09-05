import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { ProjectCard, LoadingSpinner } from '../components';
import { ProjectStore } from '../api';
import styled from 'styled-components';


const ColWrapper = styled(Col)`
    padding-right: 8.5px !important;
    padding-left: 8.5px !important;
`

const RowWrapper = styled(Row)`
    margin-bottom: 17px;
`


export default class ProjectCardGrid extends React.Component {

    state = {
        loading: true,
        projects: null
    }

    async componentDidMount() {
        let projects = await ProjectStore.getProjectList();
        this.setState({ loading: false, projects: projects});
    }

    render() {

        // wraps a column consisting of one project, inside a row
        const Rows = ({ projects }) => {
            let rows = []
            let row = []

            for(const [i, project] of projects.entries()) {
                row.push(<ColWrapper key={i} xs={8} md={4}><ProjectCard project={project}></ProjectCard></ColWrapper>)

                // three per row, start with index=1
                if((i+1) % 3 === 0 || i+1 === projects.length) {
                    rows.push(row)
                    row = []
                }
            }

            return (
                <Container style={{ lineHeight: '24px'}}>
                    {rows.map((r, i) => <RowWrapper key={i}>{r}</RowWrapper>)}
                </Container>
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
