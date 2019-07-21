import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ProjectCard from './ProjectCard';


export default class ProjectCardGrid extends React.Component {
    render() {
        return (
            <div className="projectCardGrid">
                <Row>
                    <Col sm={4}>
                        <ProjectCard slug="list-these-servers" name="ListTheseServers" summary="A server monitoring tool to monitor the downtime of servers. Users may also search for servers by tag, or by name." />
                    </Col>
                    <Col sm={4}>
                        <ProjectCard slug="asyncbot" name="asyncbot" summary="An asynchronous bot enabling two-way communication between a game server and Discord. This was used to administrate both servers." />
                    </Col>
                </Row>
            </div>
        );
    }
}