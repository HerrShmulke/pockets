<template>
  <div class="signin">
    <h1 class="signin__title">
      Pockets
    </h1>
    <h2 class="signin__greeting">
      Welcome to Pockets! 👋🏻
    </h2>
    <p class="signin__description">
      Please sign-in to your account and start the <br />adventure
    </p>
  </div>
</template>

<script>
  export default {
    name: 'SignInPage',
  };
</script>

<style lang="scss">
  .signin {
    min-width: 407px;
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
  }
</style>
