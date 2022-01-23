<template>
  <div class="clip">
    <div class="clip__inner">
      <div class="clip__inner--front">
        <img
          class="flip__inner--front-img"
          v-if="data.hero.images"
          :src="data.hero.images['sm']"
        >
      </div>
      <div class="clip__inner--back">
        <h3>{{data.hero.name}}</h3>
        <div
          class="stats"
          v-for="(value, name) in data.hero.powerstats"
          :key="name"
        >
          <div class="stats__column stats__column--left">{{name}}</div>
          <div class="stats__column stats__column--right">{{value}}</div>
        </div>

        <button>More Info</button>
      </div>
    </div>
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
.clip {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.clip__inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.clip:hover .clip__inner--back {
  animation: circleIn 0.75s;
  clip-path: circle(0%);
  animation-fill-mode: forwards;
}

.clip__inner--front,
.clip__inner--back {
  width: 200px;
  height: 300px;
  position: absolute;
}

.clip__inner--front {
  border: 1px solid black;
  color: black;
}

.clip__inner--back {
  opacity: 0;
  color: white;
  clip-path: inset(50% round 50%);
  background-color: rgba(0, 0, 0, 0.65);
  animation: circleOut 0.75s;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.stats {
  display: flex;
  flex-direction: row;
  &__column {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    flex: 2;
    &--left {
      text-align: right;
    }
    &--right {
      text-align: center;
    }
  }
}

@keyframes circleIn {
  from {
    opacity: 0;
    clip-path: inset(50% round 50%);
  }
  to {
    opacity: 1;
    clip-path: inset(0% round 0%);
  }
}
@keyframes circleOut {
  from {
    opacity: 1;
    clip-path: inset(0% round 0%);
  }
  to {
    opacity: 0;
    clip-path: inset(50% round 50%);
  }
}
</style>
