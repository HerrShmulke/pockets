<template>
  <label class="text-field">
    <span class="text-field__label">
      {{ label }}
    </span>
    <VInput v-bind="$attrs" />
  </label>
</template>

<script>
  // Components
  import VInput from '@/components/ui/VInput.vue';

  export default {
    name: 'TextField',

    components: { VInput },

    props: {
      label: { type: String, required: true },
    },
  };
</script>

<style lang="scss">
  .text-field {
    display: block;

    &__label {
      margin-bottom: 2px;
      font-size: 12px;
      line-height: 18px;
      display: block;
    }
  }
</style>
