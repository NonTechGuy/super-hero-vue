import { createStore } from 'vuex';
import all from '../assets/ts/api/heroes.api';

export default createStore({
  state: {
    heroes: { hero: true },
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, heroes) {
      state.heroes = heroes;
      console.log(heroes);
    },
  },
  actions: {
    async setHeroes({ commit }) {
      const [err, heroes] = await all();
      if (err) console.log(err); // TODO: display error notification
      else commit('setHeroes', heroes);
    },
  },
  getters: {
    heroes: (state) => state.heroes,
  },
  modules: {
  },
});
