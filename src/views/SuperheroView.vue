<template>
  <div v-if="hero">
    <div style="text-align:left;">
      <button
        class="button"
        @click="$router.push('/')"
        role="button"
      >Back</button>
    </div>
    <div>
      <h1>{{hero.name}}</h1> <!-- TODO: display more stats -->
      <img
        v-if="hero.images"
        :src="hero.images['md']"
      >
    </div>
    <div>
      <button
        style="margin-right: 0.5rem"
        class="button"
        @click="save(hero)"
      >Save hero</button>
      <button
        class="button"
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
h1 {
  opacity: 0;
  animation: fadeIn 1s 1s;
  animation-fill-mode: forwards;
}
img {
  opacity: 0;
  border: 1px solid black;
  animation: fadeIn 1s 1s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
