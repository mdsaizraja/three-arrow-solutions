import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;

  overflow-x: hidden;
  overflow-y: visible;


  @media only screen and (max-width: 640px) {
    padding: 15px;
    .accord {
      padding:0px;
    }
  }


`;
