<template>
  <q-header class="navbar" elevated>

    <q-toolbar class="navbar__toolbar">

      <!-- Logo -->
      <div class="navbar__logo">

        <RouterLink to="/" class="navbar__logo-text">
          wheelO
        </RouterLink>

      </div>

      <!-- Navigation -->
      <div class="navbar__menu">

        <RouterLink
          to="/"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/vehicles"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          Vehicles
        </RouterLink>

        <RouterLink
          to="/account"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          Account
        </RouterLink>

      </div>

      <!-- Mobile -->
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="navbar__mobile-button"
        @click="drawer = true"
      />

    </q-toolbar>

    <div class="navbar__border"></div>

    <!-- Drawer -->

    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      bordered
    >

      <q-list>

        <q-item clickable to="/">
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable to="/vehicles">
          <q-item-section>Vehicles</q-item-section>
        </q-item>

        <q-item clickable to="/account">
          <q-item-section>Account</q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style lang="scss">

@use "@/assets/styles/variables" as *;

.navbar{
    background:white;
    color:$text;

}

.navbar__toolbar{

    height:72px;
    padding:0;

}

.navbar__logo {
    width: 320px;
    height: 72px;
    display: flex;
    align-items: center;
    padding-left: 40px;
    background: transparent; /* or simply remove the background property */
}

.navbar__logo-text {
    color: #0a0a0a;   // or #FFD700
    font-size: 38px;
    font-weight: 700;
    text-decoration: none;
}

.navbar__menu{

    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:40px;
    padding-right:60px;

}

.navbar__link {
    color: #0a0a0a;  /* or #FFD54F / your preferred yellow */
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 5px;
    transition: .3s;
    position: relative;
}
.navbar__link::after{

    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:0;
    height:2px;
    background:#f8df39;
    transition:.3s;

}

.navbar__link:hover::after{
    width:100%;

}

.navbar__link--active::after{
    width:100%;

}

.navbar__border{

    height:2px;
   
}

.navbar__mobile-button{

    display:none;
    margin-right:15px;

}

@media(max-width:768px){

    .navbar__menu{
        display:none;

    }

    .navbar__logo{
        width:100%;

    }

    .navbar__mobile-button{
        display:flex;
        position:absolute;
        right:10px;
        color:white;

    }

}
</style>