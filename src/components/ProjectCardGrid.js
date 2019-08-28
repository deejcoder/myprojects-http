import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Spinner } from '@blueprintjs/core'

import ProjectCard from './ProjectCard';
import APIClient from '../api/APIClient'


export default class ProjectCardGrid extends React.Component {

    state = {
        loading: true,
        projects: null
    }

    async componentDidMount() {
        let client = new APIClient();
        let projects = await client.getProjectList();
        this.setState({ loading: false, projects: projects});
    }

    render() {

        // wraps a column consisting of one project, inside a row
        const Rows = ({ projects }) => {
            let rows = []
            let row = []

            for(const [i, project] of projects.entries()) {
                row.push(<Col key={i} xs={8} md={4}><ProjectCard project={project}></ProjectCard></Col>)

                // three per row, start with index=1
                if((i+1) % 3 == 0 || i+1 == projects.length) {
                    rows.push(row)
                    row = []
                }
            }

            return (
                <Container fluid style={{ lineHeight: '24px'}}>
                    {rows.map((r, i) => <Row key={i} style={{ paddingBottom: '30px' }}>{r}</Row>)}
                </Container>
            )
        }

        return (
            <React.Fragment>
                {this.state.loading ? (
                    <Spinner intent="primary" size="50"></Spinner>
                ) : (
                    <Rows projects={this.state.projects}></Rows>
                )}
            </React.Fragment>
        )
    }
}
