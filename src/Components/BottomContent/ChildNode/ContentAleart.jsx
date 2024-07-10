import style from "styled-components";
import { LuPlus } from "react-icons/lu";

const PlusIcon = style(LuPlus)`
    height: 50px;
    width: auto;
    background-color: #fdfdfd;
    color: #ababab;
    border-radius: 50%;
    transition: all .3s ease;
`;

const Container = style.section`
    height: 250px;
    width: 209px;
    border-radius: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
`;

const CounterOne = style.div`
    background: transprent;
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

    &:nth-of-type(1){
        position: relative;
        top: 40px;
        background: #e3fd8f;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
    }

    &:nth-of-type(2){
        background: #000000;
        color: #FFFFFF;
        position: relative;
        top: 15px;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
    }

    &:nth-of-type(3){
        background: #a5a394;
        position: relative;
        top: -10px;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
    }
`;

const CounterHeading = style.h2`
    font-size: 14px;
    padding-left: 20px;
`;

const SubHeading = style.h4`
    font-size: 12px;
    position: relative;
    top: -25px;
    padding-left: 20px;
`;

const CounterAdd = style.div`
    background: #e7e8ec;
    position: relative;
    top: -35px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 32px;

    &:hover{
        ${PlusIcon}{
            transform: scale(1.1);
        }
    }
`;

const ConatentDiv = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;
    left: -20px;
`;

export default function ContentAleart() {
    return (
        <Container>
            <CounterOne>
                <CounterHeading>vice president</CounterHeading>
                <SubHeading>8 to 9</SubHeading>
            </CounterOne>
            <CounterOne>
                <CounterHeading>lead manager</CounterHeading>
                <SubHeading>4 to 6</SubHeading>
            </CounterOne>
            <CounterOne>
                <CounterHeading>manager</CounterHeading>
                <SubHeading>5 to 7</SubHeading>
            </CounterOne>
            <CounterAdd>
                <ConatentDiv>
                    <CounterHeading style={{ position: "relative",top: "10px" }}>new role</CounterHeading>
                    <SubHeading style={{ height: "auto", width: "100px", top: "-10px" }}>create new one / select tempate</SubHeading>
                </ConatentDiv>
                <PlusIcon />
            </CounterAdd>
        </Container>
    );
}