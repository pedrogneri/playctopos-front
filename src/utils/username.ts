export const getUsername = () => localStorage.getItem('@username');

export const changeUsername = (newUsername: string) => {
  localStorage.setItem('@username', newUsername);
};
