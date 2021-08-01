<template>
  <AuthCard
    class="sign-in"
    greeting="Welcome to Pockets! 👋🏻"
    description="Please sign-in to your account and start the adventure"
  >
    <AuthForm @submit.prevent>
      <TextField name="email" label="Email" placeholder="johndoe@gmail.com" autocomplete="email" />
      <PasswordField
        name="password"
        label="Password"
        placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
        autocomplete="on"
        :to="$options.forgotPasswordLink"
      />
      <VButton>Login</VButton>
    </AuthForm>
  </AuthCard>
</template>

<script>
  // Constants
  import { AUTH_FORGOT_PASSWORD } from '../constants/router.js';

  // Components
  import TextField from '@/components/ui/TextField.vue';
  import AuthCard from '../components/AuthCard.vue';
  import PasswordField from '@/components/ui/PasswordField.vue';
  import VButton from '@/components/ui/VButton.vue';
  import AuthForm from '../components/AuthForm.vue';

  export default {
    name: 'SignInPage',

    components: { TextField, AuthCard, PasswordField, VButton, AuthForm },

    forgotPasswordLink: { name: AUTH_FORGOT_PASSWORD },
  };
</script>
