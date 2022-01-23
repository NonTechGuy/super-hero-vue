<template>
  <div v-if="hero">
    <h1>{{hero.name}}</h1>
    <img
      v-if="hero.images"
      :src="hero.images['md']"
    >
    <div>
      <button
        class="btn"
        @click="save(hero)"
      >Save hero</button>
      <button
        class="btn"
        @click="$router.push('/saved')"
      >View saved heroes</button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import store from '../store';

export default {
  mounted() {
    const route = useRoute();
    store.dispatch('setHero', route.params.id);
  },
  computed: {
    hero() {
      return store.getters.hero;
    },
  },
  methods: {
    save(hero: object) {
      store.dispatch('save', hero);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
