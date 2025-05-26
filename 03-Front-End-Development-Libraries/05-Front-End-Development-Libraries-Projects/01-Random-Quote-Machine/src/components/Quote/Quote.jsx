import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import s from './Quote.module.css';

export const Quote = ({ quote, author, isAnimating }) => (
  <div className={s.quoteText} style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.5s ease' }}>
    <FaQuoteLeft style={{ marginRight: '10px' }} />
    <span id="text">{quote}</span>
    <FaQuoteRight style={{ marginLeft: '10px' }} />
  </div>
)
