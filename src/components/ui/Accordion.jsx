import React, { useState } from 'react';
import { MdRemove, MdAdd } from 'react-icons/md';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <span className="accordion-title">{item.question}</span>
            <span className="accordion-icon">
              {openIndex === index ? <MdRemove /> : <MdAdd />}
            </span>
          </button>
          <div
            className={`accordion-content ${openIndex === index ? 'open' : ''}`}
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
