import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setkeyword] = useState('');
    
    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

    }
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