import React from "react";

const Home = ({ user }) => {
  return (
    <>
      <h1 className="username">Welcome {user?.username}!</h1>
      <img className="react-logo" src="/react-logo.svg" alt="React Logo" />
    </>
  );
};

export default Home;
