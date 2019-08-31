import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';


export default class CloseButton extends React.Component {
    render() {
        return (
            <div style={{ marginRight: 15, marginLeft: 15, marginTop: 15 }}>
                <Link to="/">
                    <Icon icon="cross" iconSize={25} />
                </Link>
            </div>
        )
    }
}