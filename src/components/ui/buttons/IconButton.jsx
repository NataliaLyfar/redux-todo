import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
padding: ${p => p.theme.space[0]}px;
border-radius: ${p => p.theme.radii.round};
background: transparent;
display: flex;
align-items: center;
justify-content: center;
color: ${p => p.theme.colors.accent};
border: 0;
cursor: pointer;

transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    width: 30px;
    height: 30px;
  };
  &:hover,
  &:focus {
    outline: none;
    background: #D5D8A8;
    color: ${p => p.theme.colors.secondary};
    box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(81, 50, 50, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(117, 49, 49, 0.25),
      inset 0 -15px 30px rgba(210, 105, 30, 0.7);
  };
`;

export const IconButton = ({onClick, children, icon}) => {
  return <StyledButton type="button" onClick={onClick}>{children}{icon}</StyledButton>
};

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
 };