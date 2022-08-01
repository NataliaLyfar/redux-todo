import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import { GoSearch } from "react-icons/go";
import { Container } from 'components/ui';


const HeaderWrapper = styled.header`
position: fixed;
width: 100vw;
z-index: 100;
background: ${p => p.theme.colors.yellow};
`;
const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const StyledLink = styled(NavLink)`
display: block;
padding: ${p => p.theme.space[3]}px 0;
color: ${p => p.theme.colors.black};
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
font-family: ${p => p.theme.fonts.body};
font-family: ${p => p.theme.fonts.body};
  &.active {
    color: ${p => p.theme.colors.black}
  };
  &:hover {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;


export const MainHeader = () => {
  return (
    <HeaderWrapper>
      <Container>
          <Nav>
            <StyledLink  to="/user">User</StyledLink>
            <StyledLink  to="/filter"><GoSearch /></StyledLink>
          </Nav>
      </Container>
    </HeaderWrapper>
  );
};