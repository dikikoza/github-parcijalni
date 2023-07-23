// src/api/githubApi.js
const BASE_URL = "https://api.github.com";

export const getUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found.");
  }
  return response.json();
};

export const getUserRepos = async (username) => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos`);
  if (!response.ok) {
    throw new Error("User repositories not found.");
  }
  return response.json();
};
