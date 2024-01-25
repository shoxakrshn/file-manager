export const getUserName = () => {
  const userName = process.argv.slice(2).join('').split('=');

  return userName[0].includes('username') ? userName[1] : 'Guest';
};
