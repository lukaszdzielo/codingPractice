import { createStore } from 'vuex';

import coachModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
  },
  state() {
    return {
      userId: 'c1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isCoach(state) {
      return state.isCoach;
    },
  },
});

export default store;
