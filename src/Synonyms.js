import React from "react";

export default function Synonmys(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {" "}
        Synonmys:
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
