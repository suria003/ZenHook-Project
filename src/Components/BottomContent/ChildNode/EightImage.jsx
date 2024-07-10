import style from "styled-components";

import EightImages from "../../../Images/EightImage.jpg";

const Container = style.section`
    height: auto;
    width: fit-content;
`;

const ImageContent = style.img`
    height: 250px;
    width: auto;
    object-fit: cover;
`;

export default function EightImage(){
    return(
        <Container>
            <ImageContent src={EightImages} />
        </Container>
    );
}