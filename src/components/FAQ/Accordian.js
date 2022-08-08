import React, { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title text-black dark:text-white font-extrabold text-4xl mb-9 " onClick={() => setIsActive(!isActive)}>
        <div>{title} <span className='float-right ml-10'>{isActive ? <IoIosArrowDropdownCircle size="3rem" /> : < IoIosArrowDropupCircle  size="3rem"/>}</span></div>
       
      </div>
      {isActive && <div className="accordion-content text-black dark:text-white font-extrabold text-2xl mb-8">{content}</div>}
    </div>
  );
};

export default Accordion;
