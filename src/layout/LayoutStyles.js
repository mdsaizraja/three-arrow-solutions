import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;

  overflow-x: hidden;

  @media only screen and (max-width: 480px) {
    padding: 15px;
  }
`;
