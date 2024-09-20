<template>
  <div class="button" @click="sound">
    <img class="button-icon" v-if="icon === 'calibration'" src="../assets/images/calibration.svg" />
    <span class="button-text" v-if="text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import buttonSound from '../assets/audios/sounds/button.mp3';

defineProps({
  icon: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  }
});

function sound(): void {
  const audio = new Audio(buttonSound);
  audio.play();
}
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
  min-width: 20rem;
  padding: 2rem 2.5rem;
  border: 0.0625rem solid var(--color-text);
  border-radius: 0.5rem;
  background-color: var(--color-button-background);
  cursor: pointer;
  &-icon {
    width: 2.5rem;
    filter: drop-shadow(0 0.375rem 0 var(--color-button-background));
  }
  &-text {
    font-size: 2rem;
    letter-spacing: 0.0625rem;
  }
}
</style>
