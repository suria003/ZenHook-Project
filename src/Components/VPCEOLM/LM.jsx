import style from "styled-components";
import { VscGraphLine } from "react-icons/vsc";

const Icon = style(VscGraphLine)`
    color: #000000 !important;
    height: 20px;
    width: auto;
`;

const Lmcontent = style.section`
    height: auto;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    z-index: 100;

    position: relative;
    top: -50px;
    left: -80px;
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
        background: #e6e7eb;
        display: grid;
        place-content: center;
        font-weight: 450;
    }

    &:nth-of-type(2){
        text-transform: uppercase;
        font-weight: bold;
        background: #a5a394;
        display: grid;
        place-content: center;
    }
`;

const Line = style.div`
    height: 2px;
    width: 150px;
    background: #000000;

    &:nth-of-type(3){
        width: 150px;
        transform: rotate(-60deg);
        position: relative;
        top: 52.5px;
        left: 38px;
    }
`;

export default function LM() {
    return (
        <Lmcontent>
            <CricleContent>
                <Circle><Icon /></Circle>
                <Circle>LM</Circle>
            </CricleContent>
            <Line></Line>
            <Line></Line>
        </Lmcontent>
    );
}