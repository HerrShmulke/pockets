<template>
  <RouterView />
</template>

<script>
  export default {
    name: 'App',

    mounted() {
      console.log(this.$router.getRoutes());
    },
  };
</script>
