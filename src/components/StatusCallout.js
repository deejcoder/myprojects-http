import React from 'react';
import { Callout, Intent } from '@blueprintjs/core';


export default class StatusCallout extends React.Component {
    render() {
        let {success, message, errors} = this.props;
        console.log(success, message, errors)

        return (
            <Callout
                title={success ? "Success!" : "Oh dear!"} 
                intent={success ? Intent.SUCCESS : Intent.DANGER} 
                style={{ marginBottom: 20 }}
            >
                {message}
                {errors &&
                    <ul>
                        {errors.map((e, i) =>
                            <li key={i}>{e.error}</li>
                        )}
                    </ul>
                }
            </Callout>
        )
    }
}