<script setup>
import about from "../components/About.vue";
</script>

<template>
  <div class="container gap-80 justify-center items-center mt-20">
    <div class="justify-center items-center logo">
      <img
        alt="Programmatic logo"
        class="logo self-center"
        src="../assets/logo.png"
        width="700"
        height="700"
      />
    </div>
    <main class="content flex justify-center items-center flex-col">
      <about />
    </main>
  </div>
  <div></div>
</template>

<style scoped>
/* media quarty 1530 */
@media (max-width: 1530px) {
  .logo {
    width: 200px !important;
    height: 200px !important;
    max-width: 200px !important;
  }

  .container {
    gap: 14rem;
    padding: 1rem;
    padding-bottom: 3rem;
  }
}

/* media quary 1300px */
@media (max-width: 1300px) {
  .container {
    gap: 10rem;
    margin-top: 4rem;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 300px;
  height: 300px;
  max-width: 300px !important;
}

.content {
  justify-content: center;
  align-items: center;
  max-width: 900px;
}

@media (max-width: 1025px) {
  .container {
    flex-direction: column;
    max-width: 100% !important;
    gap: 6rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
}
</style>
