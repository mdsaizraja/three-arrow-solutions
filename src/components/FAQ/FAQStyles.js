import styled from "styled-components";
export const HeadingSection = styled.div`
  background: linear-gradient(79.97deg, var(--gradient-one) 3.84%, var(--gradient-two) 55.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 34px;

`;

export const Title = styled.div`
  background: linear-gradient(89.97deg, var(--gradient-one) 1.84%, var(--gradient-two) 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 34px;


  
`;
export const Span = styled.div`
  font-size: 34px;
  &:hover {
    background: linear-gradient(79.97deg, var(--gradient-one) 3.84%, var(--gradient-two) 55.67%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }



  
`;
export const Res = styled.div`
@media only screen and (max-width:480px){
  margin-left:0px;
  flex-direction: column;
  .ml-32 {
    margin-left: 0;
    width-100%;
}
  

}
`;
