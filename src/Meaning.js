import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>

        <div className="definition"> {props.meaning.definition}</div>
        <br />
        <div className="example">Example: {props.meaning.example}</div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return (
      <div>
        <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
        <p className="definition">{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  }
}
