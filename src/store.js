import { createStore, action } from 'easy-peasy';

const store = createStore({
  messages: [],
  addMessage: action((state, payload) => {
    state.messages.push(payload);
  }),
  playlist: [],
  changePlaylist: action((state, payload) => {
    state.playlist = payload;
  }),
});

export default store;
