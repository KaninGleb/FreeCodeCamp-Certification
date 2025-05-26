import React from 'react';
import s from './Author.module.css';

export const Author = ({ author, isAnimating }) => (
  <div className={s.quoteAuthor} style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.5s ease' }}>
    - <span id="author">{author}</span>
  </div>
)
