<template>
  <div class="loading">
    <div class="loading-point top"></div>
    <div class="loading-point top-right"></div>
    <div class="loading-point right"></div>
    <div class="loading-point bottom-right"></div>
    <div class="loading-point bottom"></div>
    <div class="loading-point bottom-left"></div>
    <div class="loading-point left"></div>
    <div class="loading-point top-left"></div>
    <div class="loading-box">
      <div class="loading-box-corner up right"></div>
      <div class="loading-box-corner down right"></div>
      <div class="loading-box-corner down left"></div>
      <div class="loading-box-corner up left"></div>
    </div>
    <img class="loading-circle-exterior" src="../assets/images/loading-circle-exterior.svg" />
    <img class="loading-circle-interior" src="../assets/images/loading-circle-interior.svg" />
    <span class="loading-text">{{ $t('generic.loading').toUpperCase() }}</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15.5rem;
  height: 15.5rem;
  &-point {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border: 0.1875rem solid var(--color-loading-background);
    border-radius: 50%;
    animation-name: spark;
    animation-duration: 0.5s;
    animation-timing-function: step-start;
    animation-iteration-count: infinite;
    @for $i from 1 through 8 {
      &:nth-child(#{$i}) {
        animation-delay: 0.0625s * $i;
      }
    }
    &.top {
      top: 0;
    }
    &.top-right {
      top: 2rem;
      right: 2rem;
    }
    &.right {
      right: 0;
    }
    &.bottom-right {
      bottom: 2rem;
      right: 2rem;
    }
    &.bottom {
      bottom: 0;
    }
    &.bottom-left {
      bottom: 2rem;
      left: 2rem;
    }
    &.left {
      left: 0;
    }
    &.top-left {
      top: 2rem;
      left: 2rem;
    }
  }
  &-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 9.5rem;
    height: 2.5rem;
    border: 0.125rem solid var(--color-loading-border);
    background-color: var(--color-loading-background);
    &-corner {
      position: absolute;
      width: 0.1875rem;
      height: 0.1875rem;
      background-color: var(--color-loading-background);
      &.up {
        top: -0.1875rem;
      }
      &.right {
        right: -0.3125rem;
      }
      &.down {
        bottom: -0.1875rem;
      }
      &.left {
        left: -0.3125rem;
      }
    }
  }
  &-circle-exterior {
    position: absolute;
    width: 7.25rem;
    height: 7.25rem;
    opacity: 0.5;
  }
  &-circle-interior {
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    animation-name: spin;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0.5;
  }
  &-text {
    position: absolute;
    top: 6.875rem;
    color: var(--color-text-white);
    font-size: 1.5rem;
    text-shadow: none;
    animation-name: opacityBounce;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
}

@keyframes spark {
  0% {
    background-color: #ffffff;
  }
  12% {
    background-color: #ffffffcc;
  }
  25% {
    background-color: #ffffff99;
  }
  37% {
    background-color: #ffffff66;
  }
  50% {
    background-color: #ffffff33;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: -180deg;
  }
  100% {
    rotate: -360deg;
  }
}

@keyframes opacityBounce {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.75;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
