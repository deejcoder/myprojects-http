import React from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';


const MenuContainer = styled.div`
    background-color: #101010;
    height: 75px;
    width: 100%;
    border-bottom: 0.5px solid black;
`


const Menu = styled.nav`
    float: right;
    margin: 0;
    padding-top: 32.25;
    height: 100%;
    display: table;

    font-size: 18px;
    font-family: "Chivo", sans-serif;
    font-weight: 300;
    padding-left: 20px;
    padding-right: 20px;

    ul {
        display: table-row;
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 0;
        padding-top: 32.25;
    }

    @media screen and (max-width: 767px) {
        float: unset;
        justify-items: center;
        width: 100%;
    }
`

const MenuItem = styled.li`
    display: table-cell;
    vertical-align: middle;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;

    &:hover {
        color: #519ABA;
    }

    @media screen and (max-width: 767px) {
        text-align: center;
        padding-left: 5px;
        padding-right: 5px;
    }
`


export default class NavBar extends React.Component {

    state = {
        active: 1
    }

    render() {

        let scrollOptions = {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -50,
        }

        return (
            <MenuContainer>
                <Menu>
                    <ul>
                        <MenuItem 
                            onClick={() => scroller.scrollTo('about', scrollOptions)}
                        >About Me</MenuItem>
                        <MenuItem
                            onClick={() => scroller.scrollTo('projects', scrollOptions)}
                        >My Projects</MenuItem>
                        <MenuItem>Résumé</MenuItem>
                    </ul>
                </Menu>
            </MenuContainer>

        )
    }
}