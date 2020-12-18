export const truncateText = (text, size) => {
  if (!text) {
    return '';
  }

  return text.length <= size ? text : `${text.substr(0, size).trim()}...`;
};
