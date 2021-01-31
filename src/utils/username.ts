export const getUsername = () => {
  return localStorage.getItem('@username');
};

export const changeUsername = (newUsername: string) => {
  localStorage.setItem('@username', newUsername);
};
