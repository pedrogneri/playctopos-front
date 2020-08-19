import moment from 'moment';

export const getFormattedTimeBySeconds = (seconds) => {
  const hours = seconds / 3600;

  return moment.utc(seconds * 1000).format(hours < 1 ? 'mm:ss' : 'HH:mm:ss');
};
