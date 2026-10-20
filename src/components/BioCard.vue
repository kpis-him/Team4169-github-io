<script setup>
const props = defineProps({
  name: String,
  desc: String,
  langs: String,
  pos: String,
  discord: String,
  imgurl: String,
});

function getImageUrl() {
  return new URL(`../assets/${props.imgurl}`, import.meta.url);
}
</script>

<template>
  <div class="card flex border rounded border-black bg-gray-950 justify-center">
    <div class="content flex gap-4 justify-center">
      <img
        class="w-20 h-20 p-3 mt-11"
        :src="getImageUrl()"
        alt="a picture of a Programmatic member"
      />
      <section class="flex flex-col gap-4 justify-center pr-3">
        <h2 class="text-white font-bold text-sm">{{ name }}</h2>
        <p class="text-white">{{ pos }}</p>
        <p class="text-white">{{ desc }}</p>
        <p class="text-white">{{ langs }}</p>
        <p class="text-white">{{ discord }}</p>
        <!-- <button
          class="bg-gray-800 hover:bg-gray-700 active:bg-gray-600 duration-700 p-3 rounded shadow-md text-blue-100 mr-8 mt-8"
        >
          <div class="flex justify-center items-center">
            <p class="font-bold">Learn more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              ></path>
            </svg>
          </div>
        </button> -->
      </section>
    </div>
  </div>
</template>
