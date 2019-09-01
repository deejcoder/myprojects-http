import React from 'react';
import { Container } from 'react-grid-system';


export default class PageContainer extends React.Component {
    render() {

        return (
            <Container fluid style={{ 
                maxWidth: 800,
                marginTop: 30,
                marginLeft: "auto",
                marginRight: "auto" 
            }}>
                {this.props.children}
            </Container>
        )
    }
}