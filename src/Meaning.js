import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
        <p className="definition">
          {props.meaning.definition}
          <br />
          <div className="example">
            <em>"{props.meaning.example}"</em>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
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
