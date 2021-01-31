import moment, { Duration } from 'moment';

export const getFormattedTimeBySeconds = (seconds: number) => {
  const duration = moment.duration(seconds, 'seconds');

  return formatDuration(duration);
};

const formatDuration = (duration: Duration) => {
  let items = [('0' + duration.minutes()).slice(-2), ('0' + duration.seconds()).slice(-2)];

  if (duration.hours() > 0) {
    items = [('0' + duration.hours()).slice(-2), ...items];
  }
  if (duration.days() > 0) {
    items = [('0' + duration.days()).slice(-2), ...items];
  }
  if (duration.months() > 0) {
    items = [('0' + duration.months()).slice(-2), ...items];
  }

  return items.join(':');
};
