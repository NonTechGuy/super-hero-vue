<template>
  <div>
    <div style="text-align:left;">
      <button
        class="button"
        @click="$router.push('/')"
        role="button"
      >Back</button>
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
  name: 'Saved',
  components: { superhero },
  computed: {
    heroes() {
      return store.getters.saved;
    },
  },
  methods: {
    selected() {
      console.log('selected');
    },
  },
});
</script>
<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, max-content));
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
