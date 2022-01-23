<template>
  <div>
    <div
      class="fetch"
      v-if="!heroes"
    >
      <h3 class="fetch__msg">fetching heroes...</h3>
    </div>
    <div
      class="layout"
      v-if="heroes"
    >
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
    store.dispatch('setHeroes');
  },
  computed: {
    heroes() {
      return store.getters.heroes;
    },
  },
});
</script>
<style lang="scss" scoped>
.fetch {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: auto;
  &__msg {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blink 1s infinite;
  }
}
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content));
  grid-gap: 8px;
  justify-content: center;
  padding: initial;
  animation: fade 1s;
}
.item {
  width: 200px;
  height: 300px;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
