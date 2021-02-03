import socket from 'socket';
import { Message } from 'models/message';

export const sendMessage = (roomId: string, message: Message) => {
  socket.emit('room.message', { roomId, message: { ...message, type: 'message' } });
};

export const sendWarn = (roomId: string, value: string) => {
  const message: Message = { type: 'warn', value };
  socket.emit('room.message', { roomId, message });
};
