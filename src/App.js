import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const handleSubmitForm = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((userResponse) => userResponse.json())
      .then((user) => {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then((reposResponse) => reposResponse.json())
          .then((repos) => {
            setUserData(user);
            setUserRepos(repos);
          })
          .catch((error) =>
            console.error("Error fetching user repositories:", error)
          );
      })
      .catch((error) => console.error("Error fetching user data:", error));

    document.body.classList.remove("loaded"); // Remove the "loaded" class when fetching user data
  };

  const handleReset = () => {
    setUserData(null);
    setUserRepos([]);
    document.body.classList.remove("loaded");
  };

  return (
    <div className="container">
      <div className="github-icon">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      {!userData ? (
        <Form onSubmit={handleSubmitForm} />
      ) : (
        <UserDetails user={userData} repos={userRepos} onReset={handleReset} />
      )}
    </div>
  );
};

export default App;
