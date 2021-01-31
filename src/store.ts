import { createStore, action, Action } from 'easy-peasy';
import { Video } from 'models/video';
import { Message } from 'models/message';

type Store = {
  messages: Message[],
  addMessage: Action<Store>,
  playlist: Video[],
  changePlaylist: Action<Store>,
}

const store = createStore<Store>({
  messages: [],
  addMessage: action<Store>((state, payload) => {
    state.messages.push(payload);
  }),
  playlist: [],
  changePlaylist: action<Store>((state, payload) => {
    state.playlist = payload;
  }),
});

export default store;
