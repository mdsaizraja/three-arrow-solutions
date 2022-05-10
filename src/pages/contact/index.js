import React from "react";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import {Wrap} from "./style"

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