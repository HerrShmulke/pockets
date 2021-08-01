<template>
  <button class="v-button" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'VButton',
  };
</script>

<style lang="scss">
  .v-button {
    border-radius: 5px;
    border: none;
    color: $--white-color;
    padding: 10px 16px;
    background-color: $--primary-color;
    cursor: pointer;
    font-size: 14px;
  }
</style>
