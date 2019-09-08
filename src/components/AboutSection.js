import React from 'react';
import styled from 'styled-components';
import { H1, Tag } from '@blueprintjs/core';


const AboutContainer = styled.div`
    position: relative;
    width: 100%;
`

const AboutContentWrapper = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 586px;
`

const Title = styled(H1)`
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size: 32px !important;
    line-height: 38px;
    color: #DBDBDB;
`

const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
`

const HighlightedText = styled.span`
    color: #519ABA;
`

const ListContainer = styled.span`
`

const ListItem = styled(Tag)`
    margin-right: 5px;
    margin-bottom: 5px;
    color: #519ABA;
    background-color: rgba(0, 0, 0, 0) !important;
`

export default class About extends React.Component {
    render() {
        return (
            <AboutContainer>
                <AboutContentWrapper>
                    <Title>About Me</Title>
                    <Text className="bp3-running-text bp3-theme-dark">
                        Hello visitor! I'm Dylan Tonks, a computer scientist based in <HighlightedText>Hawke's Bay, NZ</HighlightedText>, who has always been passionate about developing computer software since a young age. I mainly focus on developing intelligent, efficient and high quality backends to web applications, or servers. Although, I also have experience developing frontends too!
                        <br /><br />
                        Having recently finished at <HighlightedText>Massey University</HighlightedText> in Palmerston North, I'm now seeking to develop my knowledge further, through finding a new career.
                        <br /><br />
                        Some technologies I have recently used include,
                    </Text>

                    <ListContainer>
                        <ListItem>Django/Flask</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Golang</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Java</ListItem>
                        <ListItem>Linux (Debian, Ubuntu)</ListItem>
                        <ListItem>MongoDB</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>ElasticSearch</ListItem>
                        <ListItem>Ansible</ListItem>
                        <ListItem>Docker</ListItem>
                    </ListContainer>
                </AboutContentWrapper>
            </AboutContainer>
        )
    }
}