<template>
  <q-page class="vehicle-details">
    <h1>Vehicle Details</h1>

    <p>Vehicle ID: {{ vehicleId }}</p>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const vehicleId = Number((route.params as { id: string }).id)
</script>