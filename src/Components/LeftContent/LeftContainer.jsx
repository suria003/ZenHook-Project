import style from "styled-components";

const Container = style.section`
    height: fit-content;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 40%;
    left: 5%;
`;

const Division = style.div`
    height: 60px;
    width: 240px;
    border-radius: 22px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #000;
    box-shadow: 0px 0px 3px #0000006a;


    &:nth-of-type(1){
        height: 55px;
        width: 180px;
    }

    &:nth-of-type(2){
        position: relative;
        top: -35px;
    }

    &:nth-of-type(3){
        height: 70px;
        width: 270px;
        position: relative;
        top: -55px;
        z-index: 1;
    }

    &:nth-of-type(4){
        position: relative;
        top: -75px;
    }
`;

const Number = style.div`
    height: 30px;
    width: 30px;
    padding: 5px;
    border-radius: 50%;
    background: #000;
    color: #000000;
    font-weight: 700;

    display: grid;
    place-items: center;
`;

const Header = style.h1`
    font-size: 12px;
    color: #FFFFFF;
`;

export default function LeftContainer(){
    return(
        <Container>
            <Division style={{ backgroundColor: "#FFFFFF"}}></Division>
            <Division style={{ backgroundColor: "#FFFFFF" }}><Number style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>7.8</Number><Header style={{ color: "#000000"}}>Customer happiness</Header></Division>
            <Division><Number style={{ backgroundColor: "#e0fb8d" }}>9.4</Number><Header>Employee Perfomance</Header></Division>
            <Division style={{ backgroundColor: "#FFFFFF"}} ><Number style={{ backgroundColor: "#a6a494" }}>8.5</Number><Header style={{ color: "#000000"}}>Employee satisfation</Header></Division>
        </Container>
    );
}