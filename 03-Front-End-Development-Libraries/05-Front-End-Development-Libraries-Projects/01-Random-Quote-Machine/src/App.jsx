import React, { useState, useEffect } from 'react';
import { quotes } from "./data/quotes.js";
import { colors } from "./data/colors.js";
import {Quote, Author, Buttons} from "./components/index.js";
import './App.css';

export const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('#16a085');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(newColor);
      setIsAnimating(false);
    }, 500)
  }

  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(`"${quote}" ${author}`)}`;
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(author)}&content=${encodeURIComponent(quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;


  return (
    <div className="App" style={{ backgroundColor: color, color: color, transition: 'all 1s ease' }}>
      <div id="quote-box" className="quote-box">
        <Quote quote={quote} author={author} isAnimating={isAnimating} />
        <Author author={author} isAnimating={isAnimating} />
        <Buttons tweetUrl={tweetUrl} tumblrUrl={tumblrUrl} getQuote={getQuote} color={color} />
      </div>
    </div>
  )
}