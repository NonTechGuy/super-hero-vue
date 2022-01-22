<template>
  <div class="hero">
    <img
      class="img"
      v-if="data.hero.images"
      :src="data.hero.images['sm']"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'superhero',
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {},
});
</script>

<style lang="scss" scoped>
.hero {
  border: 1px solid black;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
