<template>
  <div class="clip">
    <div class="clip__inner">
      <section class="clip__inner--front">
        <img
          class="flip__inner--front-img"
          v-if="data.hero.images"
          :src="data.hero.images['sm']"
        >
      </section>
      <section class="clip__inner--back">
        <h2>{{data.hero.name}}</h2>
        <div>
          <div
            class="stats"
            v-for="(value, name) in data.hero.powerstats"
            :key="name"
          >
            <div
              class="stats__column stats__column--left"
              style=""
            >{{name}}</div>
            <div class="stats__column stats__column--right">{{value}}</div>
          </div>
        </div>

        <button
          class="button button--show"
          style="margin:0.5rem"
          @click="to(data.hero.id)"
        >Show more</button>
      </section>
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
  methods: {
    to(id: string) {
      this.$router.push(`/superhero/${id}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.clip {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    &--front {
      border: 1px solid black;
      color: black;
    }
    &--back {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
      color: white;
      clip-path: inset(50% round 50%);
      background-color: rgba(0, 0, 0, 0.65);
      // animation: circleOut 0.75s;
    }
  }
}

.clip:hover .clip__inner--back {
  animation: circleIn 0.75s;
  clip-path: circle(0%);
  animation-fill-mode: forwards;
}

.clip__inner--front,
.clip__inner--back {
  // TODO: solve initial display
  width: 100%;
  height: 300px;
  position: absolute;
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
