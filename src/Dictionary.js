import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";


export default function Dictionary(){
    let [keyword, setKeyword] = useState('');
    let [results, setResults]= useState(null)
    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0])
    }
    function search(event){
        event.preventDefault();

    }
    //https://api.dictionaryapi.dev
    let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);


    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
          <form className="search-form" onSubmit={search}>
           <input className="search-input" type="search" autoFocus={true} onChange={handleKeywordChange}/>
         </form>
         <Results results={results} />
        </div>
    ) 
}