import React, { useState, useEffect } from "react";
import axios from "axios";

const PollPage = () => {
    const [poll, setPoll] = useState([]);
    const fetchPoll = async () => {
        try{
            const pollResponse = await axios.get(
                "http://localhost:8080/api/polls/1"
            );
            setPoll(pollResponse.data);
        } catch(err){
            console.error(err);
        }
    };
    useEffect(() =>{
        fetchPoll();
    }

    )
    return(
        <div>
            <p>Hello World!</p>
        </div>
);
};
export default PollPage; 
//Make an axios call using the url param and with the keyword as UserID aka the number for the poll
//Make a server call using the id that we created.(using url search param)
