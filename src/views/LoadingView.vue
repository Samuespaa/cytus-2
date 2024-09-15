<template>
  <div class="loading">
    <span>{{ $t('generic.loading') }}</span>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  span {
    font-size: 2rem;
  }
}
</style>
