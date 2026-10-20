<script setup>
const props = defineProps({
  name: String,
  desc: String,
  imgurl: String,
});

function getImageUrl() {
  return new URL(`../assets/${props.imgurl}`, import.meta.url);
}
</script>

<template>
  <div class="flex justify-center gap-24 items-center zPattern">
    <div>
      <img class="w-custom-scr rounded" :src="getImageUrl()" alt="" />
    </div>
    <div>
      <h2 class="txt-custom-scr text-xl font-bold text-white">
        {{ name }}
      </h2>
      <p class="txt-custom-scr mt-2 mb-4 text-lg text-gray-300">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.w-custom-scr {
  width: 560px;
  height: 296px;
}

.txt-custom-scr {
  width: 880px;
}

@media (max-width: 1600px) {
  .w-custom-scr {
    width: 400px;
    height: 200px;
  }

  .txt-custom-scr {
    width: 600px !important;
  }
}

@media (max-width: 1200px) {
  .txt-custom-scr {
    width: 500px !important;
  }
}

@media (max-width: 1050px) {
  .flex {
    flex-direction: column;
  }

  .txt-custom-scr {
    width: 700px !important;
    text-align: center;
  }

  .zPattern {
    gap: 2rem !important;
  }
}

@media (max-width: 800px) {
  .txt-custom-scr {
    width: 550px !important;
  }
}

@media (max-width: 600px) {
  .txt-custom-scr {
    width: 400px !important;
  }
}

/* media 500 */
@media (max-width: 500px) {
  .w-custom-scr {
    /* width: 300px;
    height: 150px; */
    /* slightly bigger */
    width: 350px;
    height: 175px;
  }

  .txt-custom-scr {
    width: 350px !important;
  }
}
</style>
