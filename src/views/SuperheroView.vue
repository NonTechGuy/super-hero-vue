<template>
  <div>
    Super Hero
    <button @click="fetchAPI">fetch</button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {},
  mounted() {
    axios
      .get('https://akabab.github.io/superhero-api/api/all.json')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
