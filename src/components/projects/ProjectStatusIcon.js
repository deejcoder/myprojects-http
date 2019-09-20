import React from 'react';
import { Icon } from '@blueprintjs/core'


export default class ProjectStatusIcon extends React.Component {

    render() {

        let dateCreated = new Date(Date.parse(this.props.project.date_created))

        return (
            <React.Fragment>
                {this.props.project.status === "completed" ? (
                    <Icon
                        icon="tick-circle"
                        intent="primary"
                        htmlTitle={`Completed on ${dateCreated}`}
                        style={{ paddingLeft: 10, verticalAlign: "middle" }}
                    />
                ) : (
                    <Icon
                        icon="trending-up"
                        intent="warning"
                        htmlTitle="In progress"
                        style={{ paddingLeft: 10, verticalAlign: "middle" }}
                    />
                )}
            </React.Fragment>
        )
    }
}