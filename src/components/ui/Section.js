import styled from "styled-components";
import { breakpoints } from "styleConfig/breakpoints";

export const Section = styled.section`
padding: ${p => p.theme.space[8]}px 0 ${p => p.theme.space[1]}px;
  @media (${breakpoints.tablet}){
    padding-top: ${p => p.theme.space[9]}px;
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
`;