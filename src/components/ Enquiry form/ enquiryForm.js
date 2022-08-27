import React, { useState } from "react";
import {
  Label,
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledError,
} from "./enquiryFormStyle";
import { Buttondiv } from "../Contact/ContactStyle";

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

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }
    setError("");
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <StyledFormWrapper className="">
        <StyledForm onSubmit={handleSubmit}>
          <h1 className="dark:text-white text-black font-weight-bold">
            For Project Inquiries
          </h1>
          <div className="flex justify-center xl:flex-row flex-col">
            <div className="xl:mr-8">
              <Label htmlFor="name"> First Name</Label>
              <StyledInput
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleInput}
                placeholder="Type First Name"
              />
            </div>
            <div>
              <Label htmlFor="name">Last Name</Label>
              <StyledInput
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleInput}
                placeholder="Type Last Name"
              />
            </div>
          </div>
          <Label htmlFor="email">Email</Label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
            placeholder="Type Email"
          />
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <StyledInput
            type="number"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleInput}
            placeholder="Type Phone Number"
          />

          <Label htmlFor="message">Message</Label>
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
