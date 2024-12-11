<template>
  <div class="title">
    <div class="title-loading">
      <Loading />
    </div>
    <div class="title-screen" @click="touch">
      <div class="title-screen-start">
        <div class="title-screen-start-cytus" v-if="enableStart">
          <img class="title-screen-start-cytus-image" src="../assets/images/title/cytus2.png" />
        </div>
        <div class="title-screen-start-touch" v-if="enableStart">
          <span class="title-screen-start-touch-text">{{ $t('title.touchStart').toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import titleStart from '../assets/audios/sounds/title-start.mp3';
import Loading from '../components/Loading.vue';
import Musics from '../constants/Musics';
import MusicService from '../services/MusicService';
import AnimationUtils from '../utils/AnimationUtils';

const router = useRouter();
const enableStart = ref(false);

onMounted(async () => {
  await AnimationUtils.delay(4000);
  MusicService.playMusic(Musics.TITLE_BEGIN, false);
  await AnimationUtils.delay(4000);
  MusicService.playMusic(Musics.TITLE);
  enableStart.value = true;
});

async function touch(): Promise<void> {
  if (enableStart.value) {
    new Audio(titleStart).play();
    AnimationUtils.getElement('.title').classList.add('blurred');
    await AnimationUtils.delay(1000);
    router.push('/main');
  }
}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition-property: filter;
  transition-duration: 1s;
  &.blurred {
    filter: blur(4rem);
  }
  &-loading {
    position: absolute;
    animation-name: showAndHide;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  &-screen {
    display: flex;
    justify-content: center;
    align-items: center;
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
    &-start {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      row-gap: 3rem;
      position: relative;
      top: 2.75rem;
      &-cytus {
        animation-name: show;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
        &-image {
          width: 62rem;
          filter: drop-shadow(0 0 0.5rem rgba(0, 255, 255, 0.7));
        }
      }
      &-touch {
        animation-name: show;
        animation-duration: 0.5s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        opacity: 0;
        &-text {
          color: var(--color-text-white);
          font-size: 2rem;
          text-shadow: none;
          letter-spacing: 1.25rem;
          word-spacing: -1rem;
          animation-name: opacityBounce;
          animation-duration: 1.5s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      }
    }
  }
}

@keyframes opacityBounce {
  0% {
    opacity: 0.33;
  }

  33% {
    opacity: 1;
  }

  100% {
    opacity: 0.33;
  }
}
</style>
