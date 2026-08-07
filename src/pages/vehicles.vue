<template>
  <q-page class="vehicles-page">

    <!-- Filters -->
    <div class="filters">

  <q-btn
    unelevated
    no-caps
    rounded
    label="All vehicles"
    class="filter-btn"
    :class="{ active: selectedFilter === 'all' }"
    @click="selectedFilter = 'all'"
  />

  <q-btn
    unelevated
    no-caps
    rounded
    icon="two_wheeler"
    label="2 wheeler"
    class="filter-btn"
    :class="{ active: selectedFilter === 'two' }"
    @click="selectedFilter = 'two'"
  />

  <q-btn
    unelevated
    no-caps
    rounded
    icon="directions_car"
    label="4 wheeler"
    class="filter-btn"
    :class="{ active: selectedFilter === 'four' }"
    @click="selectedFilter = 'four'"
  />



      <div class="luxury-toggle">
  <q-toggle
    v-model="luxury"
    color="yellow"
  />
  <span>{{ luxury ? 'Luxury' : 'Non-Luxury' }}</span>
</div>
</div>


    <!-- Cards -->
<div class="cards">
  <VehicleCard
    v-for="vehicle in vehicles"
    :key="vehicle.id"
    :vehicle="vehicle"
  />
</div>

  </q-page>
</template>

<script setup lang="ts">
import VehicleCard from  "@/components/home/VehicleCard.vue";
import heroCar from '@/assets/images/vehicle.png'
import { ref } from 'vue'

const selectedFilter = ref('all')

const luxury = ref(false);
const vehicles = [
  {
    id: 1,
    name: 'Mercedes',
    price: 2500,
    image: heroCar,
  },
  {
    id: 2,
    name: 'BMW',
    price: 2800,
    image: heroCar,
  },
  {
    id: 3,
    name: 'Audi',
    price: 3000,
    image: heroCar,
  },
]
</script>

<style scoped>

.vehicles-page{
  padding:30px 40px;
}

/* FILTERS */

.filters{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:35px;
  margin-bottom:35px;
}

.filter-btn{
  flex:1;
  background:#f5f5f5;
  color:#111;
  height:54px;
  font-weight:600;
}

.active{
  background:black;
  color:white;
}

.luxury-toggle{
  display:flex;
  align-items:center;
  gap:10px;
  white-space:nowrap;
}

/* CARDS */

.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:30px;
}

.vehicle-card{

  border-radius:22px;
  padding:18px;
  background:#f6f6f6;
}

.vehicle-img{

  width:100%;
  height:190px;
  object-fit:contain;
}

.card-info{

  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  margin:20px 0;
}

.vehicle-name{

  font-size:24px;
  font-weight:700;
}

.price{

  display:flex;
  flex-direction:column;
  align-items:flex-end;
}

.price span{

  color:#FFD400;
  font-size:30px;
  font-weight:700;
}

.price small{

  color:#888;
}

</style>