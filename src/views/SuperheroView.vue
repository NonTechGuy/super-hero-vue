<template>
  <div>
    Super Hero
    <button @click="fetchAPI">fetch</button>
  </div>
</template>

<script lang="ts">
import store from '../store';

export default {
  mounted() {
    store.dispatch('setHeroes');
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
