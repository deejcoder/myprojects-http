import React from 'react';

import { Container } from 'react-grid-system';
import { Icon, Spinner, H2, Tag, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import APIClient from '../api/APIClient';
import ProjectStatusIcon from '../components/ProjectStatusIcon';


class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            project: null,
        };

        this.params = this.props.match.params;
    }

    // project ids should be substitued with slugs in the near future
    async componentDidMount() {
        let client = new APIClient();
        let project = await client.getProject(this.params.id);
        this.setState({ loading: false, project: project })
    }

    render() {

        let project = this.state.project;

        return (
            <div style={{ marginRight: 15, marginLeft: 15, marginTop: 15 }}>
                {/* Close button */}
                <Link to="/">
                    <Icon icon="cross" iconSize={25} />
                </Link>

                <Container fluid style={{ maxWidth: 800, marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>

                    {this.state.loading ? (
                        <Spinner intent="primary" size="50"></Spinner>
                    ) : (
                        <div>
                            {/* Header */}
                            <H2>
                                {project.title}
                                <ProjectStatusIcon project={project} />
                            </H2>

                            {/* Content */}
                            <div style={{ fontSize: 16, lineHeight: 1.8 }}>
                                <ReactMarkdown>{project.content}</ReactMarkdown>
                            </div>

                            {/* Footer */}
                            <div className="pageOptions">
                                <a href={project.projectLink}>
                                    <Button minimal fill intent="primary" style={{ height: 40 }}>
                                        <Icon icon="code" style={{ paddingRight: 15, paddingLeft: 5 }}></Icon>
                                        View on GitHub
                                    </Button>
                                </a>
                            </div>
                        </div>
                    )}
                </Container>
            </div>
        );
    }
}

export default Project;