import styled from "styled-components";

import CEO from "./CEO";
import VP from "./VP";
import LM from "./LM";

const RightContainer = styled.section`
    height: auto;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: absolute;
    top: 40%;
    right: 10%;
`;

export default function RightContent(){
    return(
        <RightContainer>
            <CEO />
            <VP />
            <LM />
        </RightContainer>
    );
}