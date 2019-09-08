import React from 'react';
import styled from 'styled-components';
import { H3 } from '@blueprintjs/core';


const MenuContainer = styled.div`
    width: 100%;
    background-color: #101010;
    height: 75px;
    border-bottom: 0.5px solid black;
`


const Menu = styled.nav`
    float: right;
    padding: 25px;

    font-size: 18px;
    font-family: "Chivo", sans-serif;
    font-weight: 300;

    ul {
        margin: 0;
    }
`

const MenuItem = styled.li`
    float: left;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
`


export default class NavBar extends React.Component {

    state = {
        active: 1
    }

    render() {
        return (
            <MenuContainer>
                <Menu>
                    <ul>
                        <MenuItem style={{ color: `${this.state.active === 1 ? "#519ABA" : "inherit"}` }}>About Me</MenuItem>
                        <MenuItem>My Projects</MenuItem>
                        <MenuItem>Résumé</MenuItem>
                    </ul>
                </Menu>
            </MenuContainer>

        )
    }
}