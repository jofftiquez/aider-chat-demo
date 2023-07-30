<template lang="pug">
q-page.q-pa-md.row.items-center.justify-center.full-height
  div
    q-card(class="q-pa-md" style="width: 400px")
      q-card-section
        div
          | Welcome, please sign in!
        q-input(
          v-model="email"
          label="Email"
          type="email"
          outlined
          dense
          color="primary"
          :rules="[validateEmail]"
        )
        q-input(
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          color="primary"
          :rules="[validatePassword]"
        )
        q-checkbox(v-model="rememberPassword" label="Remember Password" color="primary" class="q-mb-md")
        div(class="row justify-end")
          q-btn(@click="submit" label="Sign In" color="primary" :disabled="!canSubmit")
        div(class="q-mt-md text-h6 text-grey-7")
          | Don't have an account?
          a(@click="goToSignUp") Sign up
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup () {
    const email = ref('');
    const password = ref('');
    const rememberPassword = ref(false);

    const canSubmit = computed(() => {
      return email.value && password.value;
    });

    const validateEmail = (val) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(val) || 'Invalid email format';
    };

    const validatePassword = (val) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      return passwordRegex.test(val) || 'Password must be at least 6 characters, contain a number and a special character';
    };

    const submit = () => {
      if (canSubmit.value) {
        // Handle your sign in logic here
      }
    };

    const goToSignUp = () => {
      // Implement navigation to the sign-up page
    };

    return {
      email,
      password,
      rememberPassword,
      canSubmit,
      validateEmail,
      validatePassword,
      submit,
      goToSignUp,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */

/* Center the q-card horizontally and vertically */
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.text-h6 {
  font-size: 1.25rem; /* Adjust font size as needed */
}
</style>
