import styled from "styled-components"
import background from "../assets/login.jpg"
const BackgroundImage = () => {
    return (
        <Container>
            <img src={background} alt="login bg" />
        </Container>
    )
}
const Container = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw;
    object-fit:cover;
    object-position:center;
}
`;

export default BackgroundImage;
