<template>
  <div class="auth-layout">
    <RouterView />
  </div>
</template>

<script>
  export default {
    name: 'AuthLayout',
  };
</script>

<style lang="scss">
  .auth-layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>
