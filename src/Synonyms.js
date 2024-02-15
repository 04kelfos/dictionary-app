import React from "react";
import "./Synonmys.css";
export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
