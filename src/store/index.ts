import { createStore } from 'vuex';
import { all, id } from '../assets/ts/api/heroes.api';

export default createStore({
  state: {
    heroes: [],
    hero: null,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, heroes) {
      state.heroes = heroes;
    },
    setHero(state, hero) {
      state.hero = hero;
    },
  },
  actions: {
    async setHeroes({ commit }) {
      const [err, heroes] = await all();
      if (err) console.log(err); // TODO: display error notification
      else commit('setHeroes', heroes);
    },
    async setHero({ commit }, _id) {
      const [err, hero] = await id(_id);
      if (err) console.log(err); // TODO: display error notification
      else commit('setHero', hero);
    },
  },
  getters: {
    heroes: (state) => state.heroes,
    hero: (state) => state.hero,
  },
});
