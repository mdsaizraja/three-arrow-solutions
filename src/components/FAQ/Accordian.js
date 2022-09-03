import React, { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { Container } from "../../layout/LayoutStyles";
import { Contents } from "./FAQStyles";

const Accordion = ({ title, content, onToggle, active, multiple }) => {
  const [visiblity, setVisiblity] = useState(false);

  const isActive = () => (multiple ? visiblity : active);

  const toogleVisiblity = () => {
    setVisiblity((v) => !v);
    onToggle();
  };

  return (
    <Container className="text-black dark:text-white accord">
<div className={`card ${isActive() ? "accordion-active" : ""} `}>
            <div className="card-header text-black dark:text-white " onClick={toogleVisiblity}>
                {title}
                <span className="accordion-icon text-black dark:text-white float-right">
            {isActive ? (
              <IoIosArrowDropdownCircle size="3rem" />
            ) : (
              <IoIosArrowDropupCircle size="3rem" />
            )}
          </span>
                
            </div>
            <div className="card-body text-black dark:text-white">{content}</div>
        </div>

</Container>
    
  );
};

export default Accordion;
