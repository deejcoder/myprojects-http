import React from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';


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
    cursor: pointer;
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
                            style={{ color: `${this.state.active === 1 ? "#519ABA" : "inherit"}` }}
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