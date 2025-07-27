import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../shared";
import { useSearchParams } from "react-router-dom";

//Make an axios call using the url param and with the keyword as UserID aka the number for the poll
//Make a server call using the id that we created.(using url search param)

const Poll = () => {
    const [poll, setPoll] = useState(null);
    const [searchParams] = useSearchParams();
    const pollId = searchParams.get(":pollId");

    const fetchPoll = async () => {
        try {
            const pollResponse = await axios.get(`${API_URL}/api/polls/1`);
            setPoll(pollResponse.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (pollId) {
            fetchPoll();
        }
    }, [pollId]);

    return (
        <div>
            <h2>Poll Card</h2>
            {poll.map((poll) => (
                <div className="poll-list" key={poll.id}>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <p>{poll.status}</p>
                <p>{poll.closingDate}</p>
                </div>
            ))} 
        </div>
    );
};

export default Poll;
