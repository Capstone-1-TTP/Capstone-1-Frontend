import React from "react";
import "./PollForm.css"; // we’ll create this

const PollForm = () => {
  return (
    <div className="poll-form-container">
      <h2 className="poll-title">Poll Title</h2>
      <input type="text" className="poll-description" placeholder="Poll Description" />
      {[1, 2, 3].map((n) => (
        <div className="poll-option-wrapper" key={n}>
          <span className="option-number">{n}</span>
          <input type="text" className="poll-option" placeholder={`Option ${n}`} />
        </div>
      ))}
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default PollForm;
