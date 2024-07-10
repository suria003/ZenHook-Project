import style from "styled-components";

const Container = style.section`
    height: 250px;
    width: 209px;
    border: none;
    border-radius: 32px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
`;

const DirectoryDivision = style.div`
    height: 50%;
    width: 100%;
    border-radius: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-align: center;

    &:nth-of-type(1){
        background-color: #000000;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-aligns: center;
    }
`;

const DirectoryHeader = style.h1``;

const DirectorySubHeader = style.h4`
    font-size: 14px;
    color: #0000006a;
`;

const DirectorySubDivision = style.div`
    height: 100%;
    width: 50%;
    border-radius: 32px;

    &:nth-of-type(1){
        background-color: #e7e8ec;
    }

    &:nth-of-type(2){
        background-color: #e3fd8f;
    }
`;

export default function CountImage() {
    return (
        <Container>
            <DirectoryDivision>
                <DirectoryHeader style={{ fontSize: "44px" }}>726</DirectoryHeader>
                <DirectorySubHeader style={{ position: "relative", top: "-50px", color: "#FFFFFF6a"}}>employees</DirectorySubHeader>
            </DirectoryDivision>
            <DirectoryDivision>
                <DirectorySubDivision>
                    <DirectoryHeader style={{ fontSize: "33px" }}>97</DirectoryHeader>
                    <DirectorySubHeader style={{ position: "relative", top: "-25px"}}>managers</DirectorySubHeader>
                </DirectorySubDivision>
                <DirectorySubDivision>
                    <DirectoryHeader style={{ fontSize: "33px" }}>14</DirectoryHeader>
                    <DirectorySubHeader style={{ position: "relative", top: "-25px"}}>Layers</DirectorySubHeader>
                </DirectorySubDivision>
            </DirectoryDivision>
        </Container>
    );
}