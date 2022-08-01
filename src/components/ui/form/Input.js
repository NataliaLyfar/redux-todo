import styled from "styled-components";

export const Input = styled.input`
display: inline-block;
width: 370px;
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l};
border: none;
border-bottom: 2px solid ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.black};
background-color: transparent;
outline: none;
padding: ${p => p.theme.space[1]}px ${p => p.theme.space[1]}px;
  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.black};
  };
`;