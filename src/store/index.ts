import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    heroes: { hero: true },
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setHeroes(state) {
      axios.get('https://akabab.github.io/superhero-api/api/all.json').then((res) => {
        state.heroes = res.data;
      }).catch((err) => console.log(err));
    },
  },
  actions: {
    setHeroes(context) {
      context.commit('setHeroes');
    },
  },
  getters: {
    heroes: (state) => state.heroes,
  },
  modules: {
  },
});
