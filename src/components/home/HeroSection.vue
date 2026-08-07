<template>
  <section class="hero">

    <div class="container hero__container">

      <!-- Left Content -->
      <div class="hero__content">

        <div class="hero__card">

          <h1 class="hero__title">
            Enjoy your life with
            our comfortable
            cars.
          </h1>

          <p class="hero__description">
            <span>wheelo.</span> is ready to serve the best
            experience in car rental.
          </p>

          <q-btn
            unelevated
            no-caps
            label="Explore Now"
            class="hero__button"
          />

        </div>

      </div>

      <!-- Image -->

      <div class="hero__image">

        <img
          src="src/assets/images/hero-car.png"
          alt="Mercedes"
        >

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use "@/assets/styles/variables" as *;

.hero {
  background: #fff;
  padding: 40px 0 80px;
}

.hero__container {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 520px;
}

.hero__content {
  width: 42%;
  background: #111;
  height: 500px;
  display: flex;
  align-items: center;
  z-index: 2;
}

.hero__card {
  width: 75%;
  margin-left: 80px;
}

.hero__title {
  color: white;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 30px;
}

.hero__description {
  color: #ddd;
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
}

.hero__description span {
  color: $primary;
  font-weight: 700;
}

.hero__button {
  background: $primary;
  color: #111;
  font-weight: 700;
  width: 170px;
  height: 52px;
  border-radius: 2px;
}

.hero__image {
  position: absolute;
  right: 0;
  width: 68%;
  z-index: 1;
}

.hero__image img {
  width: 100%;
  display: block;
  object-fit: cover;
}

@media (max-width: 1024px) {

  .hero__container {
    flex-direction: column;
  }

  .hero__content {
    width: 100%;
    height: auto;
    padding: 70px 0;
  }

  .hero__card {
    width: 80%;
    margin: auto;
  }

  .hero__image {
    position: relative;
    width: 100%;
    margin-top: -50px;
  }

}

@media (max-width:768px) {

  .hero__title {
    font-size: 2.3rem;
  }

  .hero__description {
    font-size: 16px;
  }

}
</style>