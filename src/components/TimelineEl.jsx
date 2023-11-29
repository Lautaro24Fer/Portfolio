import React from "react";
import "./styles/TimelineEl.css";

export default function TimelineEl({ time, task }) {
  return (
    <>
      <article className="timeline-element">
        <div className="time">{time}</div>
        <div className="logo"></div>
        <div className="task">{task}</div>
      </article>
    </>
  );
}
