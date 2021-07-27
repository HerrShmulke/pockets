<template>
  <AuthCard
    class="signin"
    greeting="Welcome to Pockets! 👋🏻"
    description="Please sign-in to your account and start the adventure"
  >
    <VInput placeholder="test" />
  </AuthCard>
</template>

<script>
  // Components
  import VInput from '@/components/ui/VInput.vue';
  import AuthCard from '../components/AuthCard.vue';

  export default {
    name: 'SignInPage',

    components: { VInput, AuthCard },
  };
</script>
