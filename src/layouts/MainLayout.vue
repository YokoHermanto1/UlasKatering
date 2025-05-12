<template>
  <q-layout view="lhh Lpr lFf">
    <q-header bordered class="bg-brown text-black, q-py-sm" style="background-color: #916236">
      <q-toolbar>
        <q-toolbar-title
          ><router-link to="/" class="q-mt-sm q-ml-md" style="text-decoration: none">
            <img
              src="/icons/LogoCateringNoBGEdited.png"
              alt="UlasKatering"
              height="50px"
            /> </router-link
        ></q-toolbar-title>
        <q-btn flat style="color: white" label="Login" :to="{ name: 'Login Page' }" />
        <q-btn flat style="color: white" label="SignUp" :to="{ name: 'Sign Up Page' }" />
      </q-toolbar>
    </q-header>
    <!-- Tempat halaman akan dirender -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
