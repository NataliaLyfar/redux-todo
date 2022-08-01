import styled from 'styled-components';

export const Text = styled.h3`
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.black};
`;
