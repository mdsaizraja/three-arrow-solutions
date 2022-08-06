import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { Buttondiv } from "../Contact/ContactStyle";

const GlobalStyle = createGlobalStyle`
label {
    font-family: 'Manrope';
font-style: normal;

font-size: 20px;
line-height: 50px;
color: #A7A7A7;

}
#inqHeading{
    font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 28px;
line-height: 30px;

}
.meetus-D{

    font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 62px;
line-height: 75px;
/* identical to box height, or 121% */

letter-spacing: -0.04em;

background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


}

`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 50px;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  width: 100%;

  padding: 40px;
  dark:text-white text-black
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function App() {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted!");
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
    // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // const test = regex.test(state.email);
    // console.log(test);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper className="">
        <StyledForm onSubmit={handleSubmit}>
          <h1 id="inqHeading" className="dark:text-white text-black">
            For Project Inquiries
          </h1>
          <div className="flex justify-center xl:flex-row flex-col">
            <div className="xl:mr-8">
              <label htmlFor="name"> First Name</label>
              <StyledInput
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleInput}
                placeholder="Type First Name"
              />
            </div>
            <div>
              <label htmlFor="name">Last Name</label>
              <StyledInput
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleInput}
                placeholder="Type Last Name"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder="Type Email"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <StyledInput
            type="number"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleInput}
            placeholder="Type Phone Number"
          />

          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <Buttondiv
            type="submit"
            className="mt-10 text-white py-5 px-14 transition-all duration-700 delay-75"
          >
            Send
          </Buttondiv>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default App;
