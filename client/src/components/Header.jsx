/* eslint-disable react/prop-types */
import styled from "styled-components"
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    // useNavigate to navigate to different page 
    const navigate = useNavigate(); 
    return (
        <Container className="flex a-center j-between headerContainer ">
            <div className="logo">
                {/* netflix logo  */}
                <img src={logo} alt="Netflix logo" />
            </div>
            {/* if the user has to login the text in the button will be login otherwise it will be signup and it will navigate to the respective page  */}
            <button className="button" onClick={() => navigate(props.login ? "/login" : '/signup')}>
                {props.login ? "login" : "signup"}
            </button>
        </Container>
    )
}

const Container = styled.div`
padding:0 4rem;
.logo{
    img{
        height:5rem
    }
}

.button{
    padding:0.5rem  1rem;
    background:#E50914;
    border:none;
    cursor:pointer;
    color:white;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;
}
`;

export default Header;
