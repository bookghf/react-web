import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa'


export const NavBar = styled.nav`
    background: #34a0ff;
    //height: 85px;
    height: ${props => props.show ? 'auto' : "85px"};
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px)/2);
    @media screen and (max-width: 768px){
        padding: 0 2rem;
    }

`
export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavMenu = styled.ul`
    padding: 0;
    display : flex;
    align-item: center;
    list-style-type: none;
    height: auto;
    @media screen and (max-width: 768px){
       // display: none;
       display: ${props => props.show ? 'block': 'none'}
    }
`

export const NavList = styled.li`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    @media screen and (max-width: 768px){
        padding: 1.5rem 0;
    }
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    &.active {
        color:#000;
    }
    
`
export const Bars = styled(FaBars)`
    color : #fff;
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,100%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavFoot = styled.footer`
    width : 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: #fff;
    position: fixed;
    bottom: 0;

`

