import React, { useState, useEffect } from "react";
import styles from "./Quote.module.css";
import { FiRefreshCw } from "react-icons/fi";

function Quote() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const [isLoading, setIsLoading] = useState(true);

  const url = "http://api.quotable.io/random";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);

        setIsLoading(false);
      });
  }, []);

  const newQuote = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.quoteContainer}>
      {isLoading && <p>Loading...</p>}
      <h3 className={styles.quote}>{quote}</h3>

      <small className={styles.author}>{author}</small>
      <button className={styles.quoteButton} type="button" onClick={newQuote}>
        <FiRefreshCw />
      </button>
    </div>
  );
}

export default Quote;
