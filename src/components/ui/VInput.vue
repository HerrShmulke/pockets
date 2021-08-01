<template>
  <input class="v-input" v-bind="$attrs" />
</template>

<script>
  export default {
    name: 'VInput',
  };
</script>

<style lang="scss">
  .v-input {
    padding: 8px 15px;
    border-radius: 5px;
    border: 1px solid $--border-color;
    width: 100%;
    font-size: 16px;

    &::placeholder {
      color: $--text-color-30;
    }

    &.focus-visible {
      border: 1px solid $--primary-color;
    }
  }
</style>
