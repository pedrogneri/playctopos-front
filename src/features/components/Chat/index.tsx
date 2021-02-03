import React, {
  useEffect, useState, useRef, useMemo, FormEvent, ChangeEvent,
} from 'react';

import { useStoreState } from 'easy-peasy';
import socket from 'socket';
import { Store } from 'store';

import Input from 'components/Input';
import { useSockets } from 'hooks/useSockets';
import { getRandomColor } from 'utils/colors';
import { getUsername } from 'utils/username';
import { Message as MessageType } from 'models/message';

import {
  Container, Footer, MessagesArea, Message, SendIcon, ChatHeader, UserIcon, Warn,
} from './styles';

type Props = {
  roomId: string;
  onOpenRegister: () => void;
}

const Chat = ({ roomId, onOpenRegister }: Props) => {
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sockets = useSockets();
  const messages: MessageType[] = useStoreState<Store>(state => state.messages);

  const storeUsername = getUsername();
  const usernameColor = useMemo(() => getRandomColor(), []);

  const [message, setMessage] = useState<MessageType>({
    username: storeUsername, color: usernameColor, value: '', type: 'message',
  });

  useEffect(() => {
    scrollChatToBottom();
    socket.on('room.message', scrollChatToBottom);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (message.value.trim()) {
      sockets.handleSendMessage(roomId, message);
    }
    setMessage({ ...message, value: '' });
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage({ ...message, value: event.target.value });
  };

  const scrollChatToBottom = () => {
    if (chatRef.current) {
      const scroll = chatRef.current.scrollHeight - chatRef.current.clientHeight;
      chatRef.current.scrollTo(0, scroll);
    }
  };

  return (
    <Container>
      <ChatHeader>
        <h4>Chat</h4>
        <UserIcon onClick={onOpenRegister} />
      </ChatHeader>
      <MessagesArea ref={chatRef}>
        {messages.map(({
          username, type, color, value,
        }, index) => (type === 'warn' ? (
          <Warn key={index.toString()}>{value}</Warn>
        ) : (
          <Message key={index.toString()} $color={color}>
            <b>{`${username}: `}</b>
            {value}
          </Message>
        )))}
      </MessagesArea>
      <Footer>
        <form onSubmit={handleSubmit}>
          <Input
            inputRef={inputRef}
            placeholder="Type a message..."
            onChange={handleChangeInput}
            value={message.value}
            endAdornment={<SendIcon />}
          />
        </form>
      </Footer>
    </Container>
  );
};

export default Chat;
