import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from "styleConfig/breakpoints";

const Menu = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between; 
`;

const Nav = styled.div`
display: flex;
flex-direction: column;
  @media (${breakpoints.tablet}) {
    flex-direction: row;
  };
`;
const Link = styled(NavLink)`
padding: ${p => p.theme.space[2]}px 0;
color: ${p => p.theme.colors.accent};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
  @media (${breakpoints.laptop}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  };
  &.active {
    color: ${p => p.theme.colors.accent}
  };
  &:hover {
    color: ${p => p.theme.colors.accent};
    cursor: pointer;
  };
`;

export const Navigation = () => {
  return (
      <Menu>
        <Nav>
          <Link to="/myDay">My day</Link>
        </Nav>
      </Menu>
  );
};