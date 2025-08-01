import React, { useState, useEffect } from "react";
import axios from "axios";
// import PollForm from './PollForm'; // make sure this is correct
import { API_URL } from "../shared";
import { Link } from "react-router-dom";

const PollFeed = () => {
  const [allPolls, setAllPolls] = useState([]);

  const fetchAllPolls = async () => {
    try {
      const pollsResponse = await axios.get(`${API_URL}/api/polls/`);
      setAllPolls(pollsResponse.data);
    } catch (error) {
      console.log("SOMETHING BROKE");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPolls();
  }, []);

  console.log("All polls:", allPolls);

  return (
    <div>
      <button><Link to="/pollfeed/createpoll">Create Poll</Link></button>
      {/* Add the poll creation form
      <CreatePoll /> */}

      {/* Show existing dummy polls */}
      <h2>Available Polls</h2>
      {allPolls.map((poll) => (
        <div className="poll-feed" key={poll.id}>
          <h3>{poll.title}</h3>
          <p>{poll.description}</p>
          <p>{poll.status}</p>
          <p>{poll.closingDate}</p>
        </div>
      ))}
    </div>
  );
};

export default PollFeed;
