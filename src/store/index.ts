import { createStore } from 'vuex';
import { notify } from '@kyvg/vue3-notification';
import { all, id } from '../assets/ts/api/heroes.api';

export default createStore({
  state: {
    loaded: false,
    heroes: [],
    hero: null,
    saved: new Set(),
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state, heroes) {
      state.heroes = heroes;
      state.loaded = true;
    },
    setHero(state, hero) {
      state.hero = hero;
    },
    saveHero(state, hero) {
      state.saved.add(hero);
    },
  },
  actions: {
    async setHeroes({ commit }) {
      const [err, heroes] = await all();
      if (err) notify({ text: 'Error getting super heroes', type: 'error' });
      else commit('setHeroes', heroes);
    },
    async setHero({ commit }, _id) {
      const [err, hero] = await id(_id);
      if (err) notify({ text: 'Oops, something went wrong!', type: 'error' });
      else commit('setHero', hero);
    },
    save({ commit }, hero) {
      commit('saveHero', hero);
      notify({ text: 'Saved your super hero!', type: 'success' });
    },
  },
  getters: {
    heroes: (state) => state.heroes,
    hero: (state) => state.hero,
    saved: (state) => [...new Set(state.saved)],
    loaded: (state) => state.loaded,
  },
});
