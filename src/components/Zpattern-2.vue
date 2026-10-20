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
  <div class="flex justify-center gap-24">
    <div>
      <h2 class="txt-custom text-xl font-bold text-white">
        {{ name }}
      </h2>
      <p class="txt-custom mt-2 mb-4 text-lg text-gray-300">
        {{ desc }}
      </p>
    </div>
    <div>
      <img class="w-custom rounded" :src="getImageUrl()" alt="" />
    </div>
  </div>
</template>
