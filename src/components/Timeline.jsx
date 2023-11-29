import React from "react";
import TimelineEl from "./TimelineEl.jsx";
import "./styles/Timeline.css";

export default function Timeline() {
  const tasks = [
    {
      time: "??/04/2018",
      text: "Beginnings in programming with Visual Basic .NET",
    },
    {
      time: "??/06/2020",
      text: "Basic HTML and CSS",
    },
    {
      time: "10/12/2021",
      text: "Project in VB6 and high school graduation",
    },
    {
      time: "2022",
      text: "University commencement, first steps with C++",
    },
    {
      time: "??/06/2022",
      text: "DigitalHouse course commencement, basic frontend",
    },
    {
      time: "??/03/2023",
      text: "Transitioning to C#",
    },
    {
      time: "??/06/2023",
      text: "Otter (personal project), completion of the Digital House course",
    },
    {
      time: "??/07/2023",
      text: "First steps in JavaScript",
    },
    {
      time: "??/09/2023",
      text: "Beta virtual wallet",
    },
    {
      time: "??/10/2023",
      text: "UI payment plan",
    },
    {
      time: "??/10/2023",
      text: "Getting started with React",
    },
    {
      time: "10/11/2023",
      text: "Spotify clone(Personal project)",
    },
    {
      time: "20/11/2023",
      text: "Initial projects with Astro",
    },
  ];
  return (
    <>
      <div className="timeline-container">
        <article className="vertical-line"></article>
        {tasks.map((task, index) => (
          <TimelineEl key={index} time={task.time} task={task.text} />
        ))}
      </div>
    </>
  );
}
