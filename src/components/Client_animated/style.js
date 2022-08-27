import styled from "styled-components";

export const Wrap = styled.div`
    display: grid;
    min-height: calc(100vh - 170px);
    place-content: center end;
    

    
    @media screen and (max-width: 480px) {
        min-height: 280px;
    }
    
    @media screen and (min-width: 480px) and (max-width: 991px) {
        min-height: 390px;
    }
    
`;