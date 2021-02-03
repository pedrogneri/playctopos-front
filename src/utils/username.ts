export const getUsername = () => localStorage.getItem('@username') || undefined;

export const changeUsername = (newUsername: string) => {
  localStorage.setItem('@username', newUsername);
};
