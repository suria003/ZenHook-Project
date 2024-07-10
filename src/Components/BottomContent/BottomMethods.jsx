import style from "styled-components";

import ImageVariable from "./ChildNode/ImageVariable";
import ContentAleart from "./ChildNode/ContentAleart";
import ThreeManImages from "./ChildNode/VerticleEight";
import CountImage from "./ChildNode/CountImage";
import EightImage from "./ChildNode/EightImage";

const BottomVariableContainer = style.section`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

    position: relative;
    top: 150px;
`;

export default function BottomMethods() {
    return (
            <BottomVariableContainer>
                <ImageVariable />
                <ContentAleart />
                <ThreeManImages />
                <CountImage />
                <EightImage />
            </BottomVariableContainer>
    );
}