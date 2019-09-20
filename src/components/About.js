import React from 'react';
import styled from 'styled-components';
import { H1, Tag } from '@blueprintjs/core';
import { SECONDARY_HIGHLIGHTED_TEXT, HEADER_COLOR } from '../const/colours';


const AboutContainer = styled.div`
    position: relative;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;

    @media screen and (max-width: 767px) {
        height: 1000px !important;
    }
`

const AboutContent = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`

const Title = styled(H1)`
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size: 32px !important;
    line-height: 38px;
    color: ${HEADER_COLOR};
`

const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
`

const HighlightedText = styled.span`
    color: ${SECONDARY_HIGHLIGHTED_TEXT};
`

const ListContainer = styled.span`
`

const ListItem = styled(Tag)`
    margin-right: 5px;
    margin-bottom: 5px;
    color: ${SECONDARY_HIGHLIGHTED_TEXT};
    background-color: rgba(0, 0, 0, 0) !important;
`

export default class About extends React.Component {

    render() {
        let languages = [
            "Django/Flask", "React", "Golang", "Python", "Java", 
            "Linux (Debian, Ubuntu)", "MongoDB", "MySQL", "ElasticSearch", "Ansible", "Docker"
        ]

        return (
            <AboutContainer>
                <AboutContent>
                    <Title>About Me</Title>
                    <Text className="bp3-running-text bp3-theme-dark">
                        Hello visitor! I'm Dylan Tonks, a computer scientist based in <HighlightedText>Hawke's Bay, NZ</HighlightedText>, who has always been passionate about developing computer software since a young age. I mainly focus on developing intelligent, efficient and high quality backends to web applications, or servers. Although, I also have experience developing frontends too!
                        <br /><br />
                        Having recently finished at <HighlightedText>Massey University</HighlightedText> in Palmerston North, I'm now seeking to develop my knowledge further, through finding a new career.
                        <br /><br />
                        Some technologies I have recently used include,
                    </Text>

                    <ListContainer>
                        {languages.map((lang, i) => 
                            <ListItem key={i}>{lang}</ListItem>
                        )}
                    </ListContainer>
                </AboutContent>
            </AboutContainer>
        )
    }
}