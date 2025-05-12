<template>
  <div class="login-page q-pa-md flex flex-center">
    <q-card class="q-pa-lg shadow-2 full-width" style="max-width: 400px ">
      <div class="text-center q-mb-md">
        <div class="text-h5 text-weight-bold text-black">Sign Up</div>
        <div class="text-caption text-grey-7">Welcome! Please enter your details</div>
      </div>

      <q-input v-model="email" label="Email" filled class="q-mb-md" />
      <q-input v-model="password" label="Password" filled type="password" class="q-mb-md">
        <template #append>
          <q-icon name="visibility" />
        </template>
      </q-input>

      <q-btn label="Sign Up" color="red-8" class="full-width q-mb-md" unelevated />

      <div class="row items-center q-my-md">
        <q-separator class="col" />
        <div class="q-px-sm text-caption">Or continue with</div>
        <q-separator class="col" />
      </div>

      <div class="row justify-around q-gutter-sm">
        <q-btn outline class="col flex items-center justify-center">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            style="height: 20px; margin-right: 8px"
          />
          Google
        </q-btn>

        <q-btn outline class="col flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            style="height: 20px; margin-right: 8px"
          />
          Facebook
        </q-btn>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #fff;
}
</style>

<script setup></script>
