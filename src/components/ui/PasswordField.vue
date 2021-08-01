<template>
  <label class="password-field">
    <div class="password-field__label-container">
      <div class="password-field__top">
        <span class="password-field__label">
          {{ label }}
        </span>
        <VLink class="password-field__link" :to="to">Forgot Password?</VLink>
      </div>
    </div>
    <VInput type="password" name="password" v-bind="$attrs" />
  </label>
</template>

<script>
  // Components
  import VInput from '@/components/ui/VInput.vue';
  import VLink from '@/components/ui/VLink.vue';

  export default {
    name: 'TextField',

    components: { VInput, VLink },

    props: {
      label: { type: String, required: true },
      to: { type: Object, required: true }
    },
  };
</script>

<style lang="scss">
  .password-field {
    display: block;

    &__label {
      font-size: 12px;
      line-height: 18px;
      display: block;
    }

    &__top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 2px;
    }
  }
</style>
