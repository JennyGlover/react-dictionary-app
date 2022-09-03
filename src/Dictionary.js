

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="form">
      <form onSubmit={search} className="form-header">
       <p className="question"> What would you like to look up?</p>
        <input type="search" onChange={handleKeywordChange} className='search-form' placeholder="Enter a word"/>
        <p className="suggested-words">i.e., Comics, manga, anime</p>
      </form>
      <Results results={results} />
    </div>
  );
}