import React from "react";
import "./CreatePoll.css"; // we’ll create this

const CreatePoll = () => {
  return (
    <div className="create-poll-container">
      <h2 className="poll-title">Create a Poll</h2>
      <input type="text" className="poll-description" placeholder="Poll Title" />
      <input type="text" className="poll-description" placeholder="Poll Description" />
      {[1, 2, 3].map((n) => (
        <div className="poll-option-wrapper" key={n}>
          <span className="option-number">{n}</span>
          <input type="text" className="poll-option" placeholder={`Option ${n}`} />
        </div>
      ))}
      <button className="submit-button">Publish Poll</button>
    </div>
  );
};

export default CreatePoll;
