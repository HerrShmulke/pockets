<template>
  <div class="auth-card" v-bind="$attrs">
    <h1 class="auth-card__title">
      Pockets
    </h1>
    <h2 class="auth-card__greeting">
      {{ greeting }}
    </h2>
    <p class="auth-card__description">
      {{ description }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AuthCard',

    props: {
      greeting: { type: String, required: true },
      description: { type: String, required: true },
    },
  };
</script>

<style lang="scss">
  .auth-card {
    max-width: 407px;
    background-color: $--white-color;
    padding: 26px 32px 52px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
    border-radius: 6px;

    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: $--primary-color;
      text-align: center;
    }

    &__greeting {
      margin-top: 30px;
      margin-bottom: 8px;
      font-size: 18px;
      line-height: 22px;
      color: $--text-color-10;
      font-weight: 500;
    }

    &__description {
      margin-bottom: 20px;
    }
  }
</style>
