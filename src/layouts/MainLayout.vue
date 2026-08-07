<template>
  <q-layout view="lHh Lpr lFf">

    <Navbar />

    <q-page-container>

      <router-view />

    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script setup lang="ts">
import Navbar from 'src/components/layout/Navbar.vue'
</script>