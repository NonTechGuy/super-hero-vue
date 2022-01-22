<template>
  <div class="layout">
    <div
      v-for='hero in heroes'
      :key="hero.id"
    >
      <superhero
        class="item"
        :data="{hero}"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';
import superhero from '../components/super-hero.vue';

export default defineComponent({
  name: 'Home',
  components: { superhero },
  mounted() {
    console.log('mounted');
    store.dispatch('setHeroes');
  },
  computed: {
    heroes() {
      console.log('computed');
      return store.getters.heroes;
    },
  },
});
</script>
<style scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 8px;
  justify-content: center;
  padding: initial;
}
.item {
  width: 100%;
  height: 100%;
}
</style>
