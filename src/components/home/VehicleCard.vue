<template>
  <q-card flat class="vehicle-card">

    <img
      class="vehicle-img"
      :src="vehicle.image"
      :alt="vehicle.name"
    />

    <div class="card-info">

      <div>
        <div class="vehicle-name">
          {{ vehicle.name }}
        </div>
      </div>

      <div class="price">
        <span>₹{{ vehicle.price }}</span>
        <small>per day</small>
      </div>

    </div>

    <<q-btn
  unelevated
  no-caps
  rounded
  class="details-btn"
  label="View Details"
  :to="`/vehicle/${vehicle.id}`"
/>

  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Vehicle {
  id: number
  name: string
  price: number
  image: string
}

const props = defineProps<{
  vehicle: Vehicle
}>()

const active = ref(false)


const router = useRouter()

function viewDetails() {
  router.push(`/vehicle/${props.vehicle.id}`)
}
</script>

<style scoped>
.vehicle-card {
  border-radius: 22px;
  padding: 18px;
  background: #fafafa;
}

.vehicle-img {
  width: 100%;
  height: 190px;
  object-fit: contain;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0;
}

.vehicle-name {
  font-size: 30px;
  font-weight: 700;
}

.price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.price span {
  color: #ffd400;
  font-size: 30px;
  font-weight: 700;
}

.price small {
  color: #888;
}

.details-btn {
  width: 100%;
  height: 52px;
  background: #ffe23b !important;
  color: white !important;
  font-weight: 600;
  border-radius: 15px;
  transition: all 0.3s ease;
}

/* Hover */
.details-btn:hover {
  background: #ffe23b !important;
  color: black !important;
}

/* After clicking */
.details-btn.active {
  background: #111 !important;
  color: white !important;
}

/* Hover after clicking */
.details-btn.active:hover {
  background: #111 !important;
  color: white !important;
}
</style>