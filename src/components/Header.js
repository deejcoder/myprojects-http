import React from 'react';
import styled from 'styled-components';
import { H3, H1 } from '@blueprintjs/core';
import me from '../assets/pic.jpg';


const HeaderWrapper = styled.div`
    position: relative;
    top: 0;
    height: 65vh;
    width: 100%;

`
const HeaderContentWrapper = styled.div`
    position: relative;
    width: 586px;
    top: 283px;
    margin-right: auto;
    margin-left: auto;
`

const HeaderContent = styled.div`
    position: absolute;
    display: inline-block;
    float: right;
    margin-left: 33px;

    h1, h3 {
        color: #B3B3B3;
    }
    
`

const HeaderImage = styled.div`
    position: relative;
    float: left;
    margin-top: 10px;
    background: url(${me});
    background-size: cover;
    height: 187px;
    width: 187px;
    border-radius: 50%;
`

const HighlightedText = styled.span`
    color: #73C4E8;
`

export default class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <HeaderContentWrapper>
                    <HeaderImage />
                    <HeaderContent>
                        <H3 style={{ position: "relative", left: "20px", fontWeight: "normal", fontSize: 28, lineHeight: "33px", color: "#73C4E8"}}>Hi, I'm</H3>
                        <H1 style={{ position: "relative", left: "50px", fontStyle: "normal", fontWeight: "bold", fontSize: 46, lineHeight: "49px", color: "#DBDBDB"}}>Dylan Tonks</H1>
                        <H3 style={{ fontStyle: "normal", fontWeight: 600, fontSize: 24, lineHeight: "33px" }}>...but some call me a <HighlightedText>Machine</HighlightedText>.</H3>
                        <p style={{ position: "relative", left: "20px", fontSize: 18, fontWeight: 300, color: "#B3B3B3" }}>I’m a kiwi and computer scientist, who enjoys developing new and exciting ideas.</p>
                    </HeaderContent>
                </HeaderContentWrapper>
            </HeaderWrapper>
        )
    }
}