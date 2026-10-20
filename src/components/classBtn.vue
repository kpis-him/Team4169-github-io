<script setup>
const props = defineProps({
  name: String,
  imgurl: String,
});

function getImageUrl() {
  return new URL(`../assets/${props.imgurl}`, import.meta.url);
}
</script>

<template>
  <div class="btn border border-red card w-24 h-24 object-cover">
    <img :src="getImageUrl()" alt="class" class="w-24 h-24 rounded-full object-cover"/>
  </div>
</template>
