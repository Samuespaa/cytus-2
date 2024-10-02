<template>
  <div class="title">
    <div class="title-loading">
      <Loading />
    </div>
    <div class="title-screen"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Loading from '../components/Loading.vue';
import Musics from '../constants/Musics';
import MusicService from '../services/MusicService';
import AnimationUtils from '../utils/AnimationUtils';

const enableStart = ref(false);

onMounted(async () => {
  await AnimationUtils.delay(4000);
  MusicService.playMusic(Musics.TITLE_BEGIN, false);
  await AnimationUtils.delay(4000);
  MusicService.playMusic(Musics.TITLE);
  await AnimationUtils.delay(10000);
  enableStart.value = true;
});
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  &-loading {
    position: absolute;
    animation-name: showAndHide;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  &-screen {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/title/background.jpg');
    background-size: cover;
    background-position: center;
    animation-name: show;
    animation-duration: 5s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
}
</style>
