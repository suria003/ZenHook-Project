import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./Logo/Logo";

import { IoCaretDownSharp } from "react-icons/io5";

const ArrowIcon = styled(IoCaretDownSharp)`
    transition: all .5s ease;
    height: 20px;
    width: auto;
`;

const Navigation = styled.nav`
    height: 7em;
    width: 100%;
    z-index: 999;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    top: 0%;
`;

const LoGoRedirector = styled(Link)``;

const NavChild = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    
    &:nth-of-type(2){
        gap: 50px;
    }
`;

const Redirector = styled(Link)`
    font-size: 18px;
    text-decoration: none;
    color: #000000;
    font-weight: 400;
    transition: all 0.3s ease;

    &:hover {
        color: #0000005a;
    }

    &:nth-of-type(3){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;

        &:hover{
            ${ArrowIcon}{
                transform: rotate(180deg);
            }
        }
    }
`;

const StratedRedirector = styled(Link)`
    padding: 15px 30px;
    border: 1.5px solid #000000;
    text-decoration: none;
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    transition: all .4s ease-in-out;

    &:hover {
        background-color: #000000;
        color: #FFFFFF;
        }
`;

const LineContainer = styled.div`
    height: 50px;
    width: 2.5px;
    background: #0000005a;
`;

export default function NavigationBar() {
    return (
        <Navigation>
            <NavChild>
                <LoGoRedirector to="/"><Logo /></LoGoRedirector>
                <Redirector to="/">contracted</Redirector>
                <Redirector to="/">
                    <LineContainer></LineContainer>
                </Redirector>
                <Redirector to="/" style={{ height: "50px", width: "200px" }}>Managerial optimization and consulting services</Redirector>
            </NavChild>
            <NavChild>
                <Redirector to="/">Spans and layers</Redirector>
                <Redirector to="/">Employee engagement</Redirector>
                <Redirector to="/">More services<ArrowIcon /></Redirector>
                <StratedRedirector to="/">Get started</StratedRedirector>
            </NavChild>
        </Navigation>
    );
}
