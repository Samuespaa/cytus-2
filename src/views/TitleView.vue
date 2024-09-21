<template>
  <div class="title">
    <div class="title-loading">
      <Loading />
    </div>
  </div>
</template>

<script setup lang="ts">
import Loading from '../components/Loading.vue';
</script>

<style scoped lang="scss">
.title {
  display: flex;
  &-loading {
    animation-name: showAndHide;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
}
</style>
