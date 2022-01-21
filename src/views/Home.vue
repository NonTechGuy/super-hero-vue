<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

export default defineComponent({
  name: 'Home',
  components: {},
  mounted() {
    store.dispatch('setHeroes');
  },
});
</script>
