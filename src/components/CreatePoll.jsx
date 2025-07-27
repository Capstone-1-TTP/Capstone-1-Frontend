import React from "react";
import "./CreatePoll.css"; // we’ll create this

const CreatePoll = () => {
  return (
    <div className="create-poll-container">
      <h2 className="poll-title">Create a Poll</h2>
      <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>

      <input
        type="text"
        className="poll-description"
        placeholder="Poll Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        className="poll-description"
        placeholder="Poll Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="text"
        className="poll-description"
        placeholder="Closing Date"
        value={closingDate}
        onChange={(e)=> setclosingDate(e.target.value)}
        required
      />

      {[0, 1, 2].map((n) => (
        <div className="poll-option-wrapper" key={n}>
          <span className="option-number">{n + 1}</span>
          <input
            type="text"
            className="poll-option"
            placeholder={`Option ${n + 1}`}
            value={options[n]}
            onChange={(e) => handleOptionChange(n, e.target.value)}
            required
          />
        </div>
      ))}

      <button className="submit-button" type="submit">
        Publish Poll
      </button>
      <button>Discard Changes</button>
      <button>Save Draft</button>
    </div>
  );
};

export default CreatePoll;
