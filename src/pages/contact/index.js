import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";

export const Wrap = styled.div`
  background: linear-gradient(89.97deg, var(--gradient-one) 1.84%, var(--gradient-two) 102.67%);
`;

const index = () => {
    return (
        <>
            <Wrap
                className="pt-1 "
            >
                <div className="xl:px-20">
                    <Header/>
                </div>
                <Contact/>
            </Wrap>
        </>
    );
};

export default index;