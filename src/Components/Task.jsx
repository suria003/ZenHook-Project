import React from "react";
import styled from "styled-components";

import Content from "./Main/OverallContent";
import LeftContainer from "./LeftContent/LeftContainer";
import RightContent from "./VPCEOLM/RightContent";
import BottomMethods from "./BottomContent/BottomMethods";

const TaskMain = styled.main`
    height: auto;
    width: 100%;
    background: transprent !important;
    margin-top: 7em;
`;

export default function Task(){
    return(
        <TaskMain>
            <Content />
            <LeftContainer />
            <RightContent />
            <BottomMethods />
        </TaskMain>
    );
}