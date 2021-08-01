<template>
  <form class="auth-form" v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'SignInForm',
  };
</script>

<style lang="scss">
  .auth-form {
    display: flex;
    flex-direction: column;

    & > .v-button {
      margin-top: 40px;
    }

    & > .text-field {
      margin-bottom: 16px;
    }
  }
</style>
