import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boutonAjouter from './Images/bouton-ajouter.png';

const StyledLinkTitle = styled(Link)`
  padding: 15px;
  color: black;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  color: black;
  text-decoration: none;
  font-size: 25px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  transition: 200ms;
  box-shadow: 5px 3px 20px grey;
  &:hover {
    cursor: pointer;
    box-shadow: 13px 5px 5px grey;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;

  border-radius: 0px 0px 20px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
`;

const ImgAjouter = styled.img`
  width: 25px;
`;

function Header() {
  return (
    <NavContainer>
      <StyledLinkTitle to="/"> GalaMiamMiam </StyledLinkTitle>
      <StyledLink to="/addMiamMiam">
        <ImgAjouter src={boutonAjouter} /> Ajouter un MiamMiam
      </StyledLink>
    </NavContainer>
  );
}

export default Header;
