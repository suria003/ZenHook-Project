import styled from "styled-components";

const CEOcontent = styled.section`
    height: auto;
    width: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Text = styled.div`
    text-transform: uppercase;
    color: #FFFFFF;
    background: #000000 !important;
    font-style: normal;
    font-size: 16px;
    height: 50px;
    width: 50px;
    font-weight: bold;
    border-radius: 50%;
    text-align: center;
    
    display: grid;
    place-content: center;
`;

const Line = styled.div`
    height: 2px;
    width: 150px;
    background: #000000;
`;

export default function CEO(){
    return(
        <CEOcontent>
            <Text>CEO</Text>
            <Line></Line>
        </CEOcontent>
    );
}