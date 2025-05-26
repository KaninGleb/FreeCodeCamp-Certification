import React from 'react';
import { FaTwitter, FaTumblr } from 'react-icons/fa';
import s from './Buttons.module.css';

export const Buttons = ({ tweetUrl, tumblrUrl, getQuote, color }) => (
  <div className={s.buttons}>
    <div className={s.links}>
      <a
        id="tweet-quote"
        className={s.button}
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{backgroundColor: color}}
      >
        <FaTwitter/>
      </a>
      <a
        id={"tumblr-quote"}
        className={s.button}
        href={tumblrUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{backgroundColor: color}}
      >
        <FaTumblr/>
      </a>
    </div>
    <button
      id="new-quote"
      className={s.button}
      onClick={getQuote}
      style={{ backgroundColor: color }}
    >
      New quote
    </button>
  </div>
)
