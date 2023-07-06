/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLinks = ({ links }) => {
    return (
        <Container className="links flex linksContainer">
            {/* mapping the links  */}
            {links.map(({ name, link }) => {
                return (
                    <li key={name}>
                        <Link to={link}>{name}</Link>
                    </li>
                );
            })}
        </Container>
    )
}
const Container = styled.ul`
list-style-type: none;
gap: 2rem;
li {
    a {
    color: white;
    text-decoration: none;
    }
}
`

export default NavbarLinks
