import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyword, setkeyword] = useState('');
    function handleResponse(response){
        
    }
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

    }
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse)


    function handleKeywordChange(event){
        setkeyword(event.target.value);
    }
    return(
        <div className="Dictionary">
          <form className="search-form" onSubmit={search}>
           <input className="search-input" type="search" autoFocus={true} onChange={handleKeywordChange}/>
         </form>
        </div>
    ) 
}