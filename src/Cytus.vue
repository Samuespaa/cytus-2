<template>
  <div class="cytus-container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MusicService from './services/MusicService';

const BASE_WIDTH: number = 1920;
const BASE_HEIGHT: number = 904;
const FONT_SIZE: number = 16;

onMounted(() => {
  window.addEventListener('resize', calculateContainerSize);
  calculateContainerSize();
  detectLanguage();
  MusicService.initialize();
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateContainerSize);
  MusicService.stopAll();
});

function calculateContainerSize(): void {
  const width = window.innerWidth / BASE_WIDTH;
  const height = window.innerHeight / BASE_HEIGHT;
  const container = document.querySelector('.cytus-container') as HTMLElement;
  if (container) {
    if (width > height) {
      container.style.width = '212.22vh';
      container.style.height = '100vh';
    } else {
      container.style.width = '100vw';
      container.style.height = '47.12vw';
    }
  }
  calculateTextSize();
}

function calculateTextSize() {
  const width = (window.innerWidth / BASE_WIDTH) * FONT_SIZE;
  const height = (window.innerHeight / BASE_HEIGHT) * FONT_SIZE;
  const size = width > height ? height : width;
  const html = document.querySelector('html');
  if (html) {
    html.style.fontSize = String(size) + 'px';
  }
}

function detectLanguage(): void {
  if (navigator.language.startsWith('es')) {
    const { locale } = useI18n();
    locale.value = 'es';
  }
}
</script>

<style scoped lang="scss">
.cytus-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-background-outside);
}
</style>
