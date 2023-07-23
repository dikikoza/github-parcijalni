// src/components/UserDetails.js
import React from "react";
import PropTypes from "prop-types";

const UserDetails = ({ user, repos, onReset }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      {user.location && <p>Location: {user.location}</p>}
      <p>Bio: {user.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      html_url: PropTypes.string,
    })
  ).isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
