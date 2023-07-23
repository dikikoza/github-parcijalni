import React, { useState } from "react";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const handleSubmitForm = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const user = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repos = await reposResponse.json();

      setUserData(user);
      setUserRepos(repos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setUserData(null);
    setUserRepos([]);
  };

  return (
    <div>
      {!userData ? (
        <Form onSubmit={handleSubmitForm} />
      ) : (
        <UserDetails user={userData} repos={userRepos} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
