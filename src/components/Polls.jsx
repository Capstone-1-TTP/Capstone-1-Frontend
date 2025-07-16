import React, { useState, useEffect } from "react";
import axios from "axios";
// import PollForm from './PollForm'; // ✅ make sure this is correct

// const dummyPolls = [
//   { id: 1, title: 'Best Snack?', options: ['Chips', 'Cookies', 'Fruit'] },
//   { id: 2, title: 'Favorite IDE?', options: ['VS Code', 'WebStorm', 'Vim'] }
// ];

const PollsPage = () => {
  const [allPolls, setAllPolls] = useState([]);

  const fetchAllPolls = async () => {
    try {
      const pollsResponse = await axios.get(
        "http://localhost:8080/api/polls/"
      );
      setAllPolls(pollsResponse.data);
    } catch (error) {
      console.log("SOMETHING BROKE 😢");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPolls();
  }, []);

  console.log("All polls:", allPolls);

  return (
    <div>
      {/* ✅ Add the poll creation form
      <PollForm /> */}

      {/* ✅ Show existing dummy polls */}
      <h2>Available Polls</h2>
      {allPolls.map((poll) => (
        <div key={poll.id}>
          <h3>{poll.title}</h3>
          <p>{poll.description}</p>
          <p>{poll.status}</p>
          <p>{poll.closingDate}</p>
        </div>
      ))}
    </div>
  );
}

export default PollsPage;
