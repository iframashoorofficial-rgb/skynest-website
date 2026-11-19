// FaqAccordion.jsx - a list of questions. Click (or press Enter/Space on) a question
// to show or hide its answer. Several answers can be open at once.
//
// Version 2 – keyboard accessibility: the Up/Down arrow keys move between questions,
// and Home/End jump to the first/last question (the recommended accordion pattern).
import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import './FaqAccordion.css';

// One question + answer
function FaqItem({ id, question, answer, isOpen, onToggle, onKeyDown }) {
  const buttonId = `faq-question-${id}`;
  const panelId = `faq-answer-${id}`;

  return (
    <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
      <h3 className="faq-question">
        <button
          id={buttonId}
          type="button"
          className="faq-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onKeyDown}
        >
          <span>{question}</span>
          <Icon name="chevronDown" size={22} />
        </button>
      </h3>
      {/* "hidden" really removes the answer from the page until it is opened */}
      <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-answer" hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  // A list of the question numbers that are currently open
  const [openItems, setOpenItems] = useState([]);

  function toggle(index) {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  }

  const allOpen = openItems.length === items.length;

  // Arrow-key movement between the question buttons
  const list = useRef(null);
  function handleKeyDown(event) {
    const buttons = [...list.current.querySelectorAll('.faq-trigger')];
    const current = buttons.indexOf(event.currentTarget);
    let next = null;
    if (event.key === 'ArrowDown') next = (current + 1) % buttons.length;
    if (event.key === 'ArrowUp') next = (current - 1 + buttons.length) % buttons.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = buttons.length - 1;
    if (next !== null) {
      event.preventDefault();
      buttons[next].focus();
    }
  }

  return (
    <div className="faq">
      <div className="faq-controls">
        <button
          type="button"
          className="btn btn--outline btn--small"
          onClick={() => setOpenItems(allOpen ? [] : items.map((_, i) => i))}
        >
          {allOpen ? 'Close all answers' : 'Open all answers'}
        </button>
      </div>

      <p className="faq-keyboard-tip" id="faq-keyboard-tip">
        Keyboard tip: use the up and down arrow keys to move between questions.
      </p>

      <div className="faq-list" ref={list}>
        {items.map((item, index) => (
          <FaqItem
            key={item.question}
            id={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(index)}
            onToggle={() => toggle(index)}
            onKeyDown={handleKeyDown}
          />
        ))}
      </div>
    </div>
  );
}
