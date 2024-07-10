import style from "styled-components";

import Image from "../../../Images/Image.jpg";

const Container = style.section`
    height: auto;
    width: fit-content;
`;

const ImageContent = style.img`
    height: 250px;
    width: auto;
    object-fit: cover;
`;

export default function ImageVariable(){
    return(
        <Container>
            <ImageContent src={Image} />
        </Container>
    );
}