<template>
  <div class="loading">
    <div class="loading-headphones">
      <img class="loading-headphones-icon" src="../assets/images/headphones.png" />
      <span class="loading-headphones-text">{{ $t('loading.useHeadphones') }}</span>
    </div>
    <div class="loading-wildsoft">
      <span class="loading-wildsoft-icon">Wildsoft</span>
    </div>
    <div class="loading-notice" v-if="showNotice">
      <span class="loading-notice-text">{{ $t('loading.notice.recreation') }}</span>
      <span class="loading-notice-text">{{ $t('loading.notice.rayark') }}</span>
      <Button :text="$t('generic.ok')" @click="accept" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import AnimationUtils from '../utils/AnimationUtils';

const router = useRouter();
const showNotice = ref(false);

onMounted(async () => {
  await AnimationUtils.delay(9000);
  showNotice.value = true;
});

async function accept(): Promise<void> {
  AnimationUtils.getElement('.loading').style.opacity = '0';
  await AnimationUtils.delay(1000);
  router.push('/title');
}
</script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  transition-duration: 0.5s;
  &-headphones {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 3rem;
    animation-name: showAndHide;
    animation-duration: 4s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
    &-icon {
      width: 11.375rem;
      height: 9.0625rem;
    }
    &-text {
      color: var(--color-text-white);
      font-size: 2.75rem;
      text-shadow: none;
    }
  }
  &-wildsoft {
    position: absolute;
    animation-name: showAndHide;
    animation-duration: 4s;
    animation-delay: 5s;
    animation-fill-mode: forwards;
    opacity: 0;
    &-icon {
      color: var(--color-text-white);
      font-family: American Kestrel;
      font-size: 6rem;
      text-shadow: none;
    }
  }
  &-notice {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 3rem;
    position: absolute;
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
    &-text {
      color: var(--color-text-white);
      font-size: 2.75rem;
      text-shadow: none;
    }
  }
}
</style>
