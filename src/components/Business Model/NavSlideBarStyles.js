import styled from "styled-components";
export const TextBottomBorder = styled.span`
  background: transparent;

  border-bottom: 2px solid transparent;

  -moz-border-image: -moz-linear-gradient(top, var(--gradient-two) 0%, var(--gradient-one) 10%);
  -webkit-border-image: -webkit-linear-gradient(
    right,
    var(--gradient-two) 0%,
    var(--gradient-one) 100%
  );
  border-image-slice: 1;
`;
