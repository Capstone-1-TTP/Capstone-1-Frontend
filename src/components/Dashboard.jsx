import React, { useState, useEffect } from "react";
import axios from "axios";
// import PollForm from './PollForm'; // make sure this is correct
import { Link } from "react-router-dom";



const Dashboard = () => {
  const [allPolls, setAllPolls] = useState([]);
  const [allBallots, setAllBallots] = useState([]);
  const [activeTab, setActiveTab] = useState("polls");

  const fetchAllBallots = async () => {
    try{
        const ballotsResponse = await axios.get(
          "http://localhost:8080/api/ballots/mypolls/"
        );
        setAllBallots(ballotsResponse.data);
    } catch(err){
        console.log("Unable to fetch ballots");
        console.error(err);
    }
    }

  const fetchAllPolls = async () => {
    try {
      const pollsResponse = await axios.get(
        "http://localhost:8080/api/polls/mypolls/" // Adjust the endpoint to fetch user's polls
      );
      setAllPolls(pollsResponse.data);
    } catch (error) {
      console.log("SOMETHING BROKE");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllBallots();
    fetchAllPolls();
  }, []);

  console.log("All polls:", allPolls);

  return (
    <div>
        <div className="dashboard-tabs">
        <button
          className={activeTab === "polls" ? "active" : ""}
          onClick={() => setActiveTab("polls")}
        >
          My Polls
        </button>
        <button
          className={activeTab === "ballots" ? "active" : ""}
          onClick={() => setActiveTab("ballots")}
        >
          My Ballots
        </button>
      </div>
      {activeTab === "polls" && (
        <div>
            <h2>My Polls</h2>
            {allPolls.length === 0 ?(
                <p>No polls have been created.</p>
            ) : (
                allPolls.map((poll) => (
        <div className="poll-list" key={poll.id}>
          <h3>{poll.title}</h3>
          <p>{poll.description}</p>
          <p>{poll.status}</p>
          <p>{poll.closingDate}</p>
        </div>
      ))
    )}
    </div>
      )}
      {activeTab === "ballots" &&(
        <div>
          <h2>My Ballots</h2>
          {allBallots.length === 0 ? (
            <p>You have not participated in any polls yet.</p>
          ) : (
            allBallots.map((ballot) => (
              <div className="ballot-list" key={ballot.id}>
                <h3>Poll: {ballot.pollTitle}</h3>
                <p>Your Choice: {ballot.choice}</p>
                <p>Voted At: {ballot.votedAt}</p>
              </div>
            ))
          )}
        </div>
      )}
      </div>
  );
};


      
export default Dashboard;