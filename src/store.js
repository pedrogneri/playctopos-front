import { createStore, action } from 'easy-peasy';

const store = createStore({
  messages: [],
  addMessage: action((state, payload) => {
    state.messages.push(payload);
  }),
});

export default store;
