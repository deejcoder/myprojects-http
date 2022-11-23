import React from 'react';
import styled from 'styled-components';
import { H3, H1 } from '@blueprintjs/core';
import { Avatar } from '../components';
import { PRIMARY_HIGHLIGHTED_TEXT, HEADER_COLOR, TEXT_COLOR } from '../const/colours';


const HeaderWrapper = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 200px;
    margin-top: 70px;
    margin-bottom: 50px;

    @media screen and (max-width: 767px) {
        height: 400px;
        margin-top: 60px;
    }

`
const HeaderContentWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
`

const HeaderContent = styled.div`
    position: absolute;
    display: inline-block;
    float: right;
    padding-left: 33px;

    h1, h3 {
        color: ${TEXT_COLOR};
    }

    @media screen and (max-width: 767px) {
        float: unset;
        align-text: center;
        padding-top: 20px;
        padding-right: 33px;
    }
    
`

const HighlightedText = styled.span`
    color: ${PRIMARY_HIGHLIGHTED_TEXT};
`

const HiLine = styled(H3)`
    position: relative;
    margin-left: 20px;
    font-weight: normal;
    font-size: 28px !important;
    line-height: 33px !important;
    color: ${PRIMARY_HIGHLIGHTED_TEXT} !important;

    @media screen and (max-width: 767px) {
        line-height: 16px !important;
        font-size: 22px !important;
    }
`

const NameLine = styled(H1)`
    position: relative;
    margin-left: 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 46px !important;
    line-height: 49px !important;
    color: ${HEADER_COLOR} !important;

    @media screen and (max-width: 767px) {
        width: 250px;
        font-size: 36px !important;
        line-height: 49px !important;
        overflow-x: hidden;
    }
`

const TagLine = styled(H3)`
    position: relative;
    font-style: normal;
    font-weight: 300 !important;
    font-size: 24px !important;
    line-height: 33px !important;

    @media screen and (max-width: 767px) {
        margin-left: 20px;
        width: 300px;
        font-size: 18px !important;
        line-height: 24px !important;
        overflow-x: hidden;
    }
`

const IntroLine = styled.p`
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 18px;
    font-weight: 300;
    color: ${TEXT_COLOR} !important;

    @media screen and (max-width: 767px) {
        margin-left: 0;
        font-size: 14px !important;
    }
`

const TextWrapper = styled.div`
    @media screen and (max-width: 767px) {
        margin-right: auto;
        margin-left: auto;
        max-width: 300px;
    }
`

export default class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <HeaderContentWrapper>
                    <Avatar size={187} />
                    <HeaderContent>
                        <TextWrapper>
                            <HiLine>Hi, I'm</HiLine>
                            <NameLine>Dylan Tonks</NameLine>
                            <TagLine>...but some call me a <HighlightedText>Machine</HighlightedText>.</TagLine>
                        </TextWrapper>
                        <IntroLine>I’m a kiwi computer scientist, who enjoys developing new and exciting ideas.</IntroLine>
                    </HeaderContent>
                </HeaderContentWrapper>
            </HeaderWrapper>
        )
    }
}