import React from "react";

export const QACard = ({ question, answer }) => (
  <div
    style={{
      border: "1px solid grey",
      padding: "10px",
      margin: "10px 0",
      textAlign: "justify",
      color: "white",
    }}
  >
    <div>
      <strong>Question:</strong> {question}
    </div>
    <div>
      <strong>Answer:</strong>{" "}
      {answer.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);
