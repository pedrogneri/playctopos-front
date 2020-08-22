import socket from 'socket';

export const sendMessage = (roomId, message) => {
  socket.emit('room.message', { roomId, message: { ...message, type: 'message' } });
};

export const sendWarn = (roomId, value) => {
  socket.emit('room.message', { roomId, message: { type: 'warn', value } });
};
