import style from "styled-components";

import { FcGenealogy } from "react-icons/fc";

const Icon = style(FcGenealogy)`
    color: #000000 !important;
    transform: rotate(90deg);
    height: 30px;
    width: auto;
`;

const VPcontent = style.section`
    height: auto;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    position: relative;
    left: 80px;
`;

const CricleContent = style.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
`;

const Circle = style.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;

    &:nth-of-type(1){
        text-transform: uppercase;
        background: #e0fa8f;
        display: grid;
        place-content: center;
        font-weight: 450;
    }

    &:nth-of-type(2){
        background: #e7e8ec;
        display: grid;
        place-content: center;
    }
`;

const Line = style.div`
    height: 2px;
    width: 150px;
    background: #000000;

    &:nth-of-type(3){
        width: 75px;
        transform: rotate(60deg);
        position: relative;
        top: 20px;
        left: -58px;
    }
`;

export default function VP() {
    return (
        <VPcontent>
            <CricleContent>
                <Circle>VP</Circle>
                <Circle><Icon /></Circle>
            </CricleContent>
            <Line></Line>
            <Line></Line>
        </VPcontent>
    );
}