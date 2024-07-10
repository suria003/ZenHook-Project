import React from "react";
import styled from "styled-components";

const LogoContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;

    height: auto;
    width: fit-content;
`;

const Container = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;

    &:nth-of-type(1){
        background-color: #010101;
    }

    &:nth-of-type(2){
        background-color: #a6a494;
    }
`;


export default function Logo(){
    return(
        <LogoContainer>
            <Container></Container>
            <Container></Container>
        </LogoContainer>
    );
}