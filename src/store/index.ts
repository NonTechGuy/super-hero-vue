import { createStore } from 'vuex';
import all from '../assets/ts/api/heroes.api';

export default createStore({
  state: {
    heroes: {},
  },
  mutations: {
    async setHeroes() {
      const [err, heroes] = await all();
      if (err) console.log(err); // TODO: display error notification
      else this.heroes = heroes;
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
