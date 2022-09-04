import React from "react";
import ReactAudioPlayer from 'react-audio-player';

import "./Phonetics.css"

export default function Phonetics(props){
    return(
        <div className="Phonetic">
            <ReactAudioPlayer src={props.phonetics.audio} controls />
           {props.phonetics.text}
        </div>
    )
}