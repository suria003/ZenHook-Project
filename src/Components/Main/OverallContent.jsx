import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContentContainer = styled.section`
    height: 300px;
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
`;

const Header = styled.h1`
    font-style: normal;
    font-size: 60px;
    text-align: center;
`;

const ParagrabhText = styled.p`
    font-size: 12px;
    height: fit-content;
    width: 50%;
    text-align: justify;

    position: relative;
    top: -40px;
`;

const RedirectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

const Redirector = styled(Link)`
    background: transprent;

    color: #000000;
    padding: 10px 20px;
    text-decoration: none;
    font-weight: 400;
    font-size: 22px;

    &:nth-of-type(1){
        background: #e7e8ec;
        transition: all .3s ease;

        &:hover{
            background: #000000;
            color: #e7e8ec;
        }
    }

    &:nth-of-type(2){
        background: #000000;
        color: #FFFFFF;
        transition: all .3s ease;

        &:hover{
            background: #e7e8ec;
            color: #000000;
        }
    }
`;

export default function Content(){
    return(
        <ContentContainer>
            <Header>Managerial optimization for your companies</Header>
            <ParagrabhText>Whether you choose efficiency or flexibility for your organization, restructuring your teams willead to improved productivitv. collaboration and overall business results</ParagrabhText>
            <RedirectorContainer>
                <Redirector to="/">All services</Redirector>
                <Redirector to="/">Book a demo</Redirector>
            </RedirectorContainer>
        </ContentContainer>
    );
}