<template>
  <div class="loading">
    <div class="loading-headphones">
      <img class="loading-headphones-icon" src="../assets/images/headphones.png" />
      <span class="loading-headphones-text">{{ $t('loading.useHeadphones') }}</span>
    </div>
    <div class="loading-wildsoft">
      <span class="loading-wildsoft-icon">Wildsoft</span>
    </div>
    <div class="loading-notice">
      <span class="loading-notice-text">{{ $t('loading.notice.recreation') }}</span>
      <span class="loading-notice-text">{{ $t('loading.notice.rayark') }}</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
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
      font-size: 2.75rem;
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
      font-family: American Kestrel;
      font-size: 6rem;
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
    animation-delay: 9s;
    animation-fill-mode: forwards;
    opacity: 0;
    &-text {
      font-size: 2.75rem;
    }
  }
}

@keyframes showAndHide {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
