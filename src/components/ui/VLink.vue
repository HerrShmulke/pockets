<template>
  <Component :is="component" class="v-link" :to="to" v-bind="$attrs">
    <slot></slot>
  </Component>
</template>

<script>
  export default {
    name: 'VLink',

    props: {
      to: { type: Object, default: () => ({}) },
    },

    computed: {
      component() {
        if (Object.keys(this.to).length > 0) {
          return 'RouterLink';
        }

        return 'a';
      },
    },
  };
</script>

<style lang="scss">
  .v-link {
    font-size: 12px;
    line-height: 18px;
    color: $--primary-color;
    text-decoration: none;
    border: 1px solid transparent;

    &.focus-visible {
      border: 1px solid $--primary-color;
    }
  }
</style>
