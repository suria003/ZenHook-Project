import style from "styled-components";

import ThreeManImages from "../../../Images/ThreeManImage.jpg";

const Container = style.section`
    height: auto;
    width: fit-content;
`;

const ImageContent = style.img`
    height: 250px;
    width: auto;
    object-fit: cover;
`;

export default function VerticleEight(){
    return(
        <Container>
            <ImageContent src={ThreeManImages} />
        </Container>
    );
}