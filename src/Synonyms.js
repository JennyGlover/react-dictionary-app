import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length >0) {
    return (
      <div>
      <p>Synonyms</p>
      <ul className="Synonyms">
        {props.synonyms.slice(0,4).map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul></div>
    );
  } else {
    return null;
  }
}
