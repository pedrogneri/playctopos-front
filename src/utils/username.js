export const getUsername = () => {
  return localStorage.getItem('@username');
};

export const changeUsername = (newUsername) => {
  localStorage.setItem('@username', newUsername);
};
