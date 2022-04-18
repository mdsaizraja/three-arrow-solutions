import styled from "styled-components";
export const TextBottomBorder = styled.span`
  background: transparent;

  border-bottom: 3px solid transparent;

  -moz-border-image: -moz-linear-gradient(top, #f49867 0%, #3a4ed5 10%);
  -webkit-border-image: -webkit-linear-gradient(
    right,
    #f49867 0%,
    #3a4ed5 100%
  );
  border-image-slice: 1;
`;
