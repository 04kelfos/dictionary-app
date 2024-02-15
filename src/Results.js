import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          {" "}
          <h2 className="text-capitalize">{props.results.word}</h2>
          <div>
            <strong>Phonetic:</strong> {""}
            {props.results.phonetic}
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
