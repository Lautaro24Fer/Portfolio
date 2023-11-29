import React from "react";
import "./styles/Stack.css";
import logos from "../json/logos.json";

export default function Stack() {
  return (
    <>
      <ul className="container-stack">
        {logos.map((stack, index) => (
          <li key={index} className={stack.class}>
            <div className="header">
              <div dangerouslySetInnerHTML={{ __html: stack.svg }} />
              <h3>{stack.name}</h3>
            </div>
            <p>Level: {stack.status}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
