import React from 'react';

export default ({ cards, activeCardIndex, onDotClick }) => (
  <div className="flippy-footer">
    {cards.map((card, index) => (
      <span
        key={`flippyFooterItem${index}`}
        className={`flippy-footer-item${activeCardIndex === index ? ' isActive' :''}`}
        onClick={onDotClick.bind(null, index)}
      >*
      </span>
    ))}
  </div>
);
