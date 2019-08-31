import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Tooltip } from '@blueprintjs/core';


export default class CloseButton extends React.Component {
    render() {
        return (
            <Tooltip content="Back">
                <div style={{ marginRight: 15, marginLeft: 15, marginTop: 15 }}>
                    <Link to="/">
                        <Icon icon="chevron-left" iconSize={35} />
                    </Link>
                </div>
            </Tooltip>
        )
    }
}