import styled from 'styled-components';

export const Title = styled.h3`
padding: ${p => p.theme.space[3]}px 0;
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.semibold};
font-family: ${p => p.theme.fonts.body};
color: ${p => p.theme.colors.black};
`;

