<script setup>
import { ref } from 'vue';
import Zpattern1 from "../components/Zpattern-1.vue";
import Zpattern2 from "../components/Zpattern-2.vue";

// Reactive state
const isOpen = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

const name = ref('');
const email = ref('');
const expertise = ref('');
const selectedValues = ref([]);

const openPopup = () => {
  isOpen.value = true;
  document.body.classList.add("overflow-hidden", "fixed", "inset-0", "pr-2.5");
};

const closePopup = () => {
  isOpen.value = false;
  document.body.classList.remove("overflow-hidden", "fixed", "inset-0", "pr-2.5");
};

const handleSubmit = async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "421ada96-51b0-46b1-9658-0b12ce56995a",
        name: name.value,
        email: email.value,
        experience: expertise.value,
        classes_can_teach: selectedValues.value.join(", "), // Turns your checkbox array into a clean readable string
        subject: "New Volunteer Signup - Team 4169 Website"
      }),
    });

    const result = await response.json();

    if (result.success) {
      // Clear form fields
      name.value = '';
      email.value = '';
      expertise.value = '';
      selectedValues.value = [];
      
      // Close sidebar and trigger your custom Success! modal
      closePopup();
      showSuccess.value = true;
    } else {
      showError.value = true;
    }
  } catch (err) {
    showError.value = true;
  }
};
</script>

<template>
  <header id="header" class="bg--about flex-col text-center shadow-lg">
    <h2 class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2 title-volunteer">
      Volunteer Today!
    </h2>
    <!-- Added @click="openPopup" here -->
    <button
      @click="openPopup"
      class="bg-gray-500 hover:bg-gray-600 active:bg-gray-600 p-5 rounded shadow-md font-extrabold text-blue-200 m-8 text-base open-popup-btn"
    >
      Sign up &rarr;
    </button>
  </header>

  <aside
    id="formbar"
    class="bg-slate-700 shadow-lg fixed top-0 h-screen z-50 w-[400px] transition-all duration-300 ease-in-out"
    :style="{ right: isOpen ? '0px' : '-400px' }"
  >
    <button
      @click="closePopup"
      class="right-5 absolute top-5 hover:text-gray-300 focus:outline-none p-1 bg-white text-gray-900 rounded-lg"
    >
      Close
    </button>
    <div class="pt-16 px-6 overflow-y-auto h-full pb-20">
      <form @submit.prevent="handleSubmit" class="text-white">
        <div class="mb-6">
          <label for="name" class="block text-sm font-bold">Name:</label>
          <input
            id="name"
            v-model="name"
            required
            class="w-full p-2 bg-white border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br /><br />
          <label for="email" class="block text-sm font-bold">Email:</label>
          <input
            id="email"
            v-model="email"
            required
            class="w-full p-2 bg-white border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br /><br />
          <label for="expertise" class="block text-sm font-bold">List Your Experience:</label>
          <textarea
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
            id="expertise"
            v-model="expertise"
            rows="4"
            required
          ></textarea>

          <br /><br />
          <label class="block text-sm font-bold">What Classes Can You Teach:</label><br />
          <div class="ml-4 space-y-1">
            <label class="flex items-center">
              <input type="checkbox" value="Pico" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Pico</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" value="PyBasic" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Python Basic</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" value="PyAdv" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Python Advanced</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" value="Scratch" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Scratch</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" value="Unity" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Unity</span>
            </label>
            <label class="flex items-center">
              <input type="checkbox" value="Other" v-model="selectedValues" class="mr-2" />
              <span class="text-gray-100">Other (Web Dev, Writing Articles, etc.)</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>

      <!-- Error Modal -->
      <div
        v-if="showError"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      >
        <div class="bg-gray-700 p-20 m-10 rounded shadow text-center">
          <p class="text-red-600 text-3xl font-extrabold mb-6">Failed to submit form</p>
          <button
            @click="showError = false"
            class="px-10 py-3 bg-red-600 text-red-100 rounded"
          >
            Close
          </button>
        </div>
      </div>

      <!-- Success Modal -->
      <div
        v-if="showSuccess"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      >
        <div class="bg-green-500 p-20 m-10 rounded shadow text-center">
          <p class="text-white text-3xl font-extrabold mb-6">Success!</p>
          <button
            @click="showSuccess = false"
            class="px-10 py-3 bg-gray-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </aside>

  <main id="main" class="flex gap-x-80 top-44 mb-10 justify-center items-center main-volunteer">
    <section class="flex flex-col gap-36 zpattern-space">
      <Zpattern1
        name="What Do We Expect In A Volunteer?"
        desc="At Programmatic, our commitment to education and empowering students extends beyond the bounds of our dedicated team..."
        imgurl="scratch.png"
      />
      <Zpattern1
        name="Why Volunteer?"
        desc="As a volunteer, you will have the chance to engage with students from diverse backgrounds..."
        imgurl="Unity.png"
      />
    </section>
  </main>

  <!-- Backdrop Overlay controlled via v-show -->
  <div
    v-show="isOpen"
    @click="closePopup"
    class="fixed inset-0 bg-black opacity-60 z-40 transition-opacity duration-300"
  ></div>
</template>

<style scoped>
.bg--about {
  background-image: url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-key;
  background-size: cover;
  background-position: center;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  max-width: 100vw;
  width: calc(100vw - (100vw - 100%));
  padding-top: 230px;
  padding-bottom: 230px;
  margin-bottom: 100px;
}

@media (max-width: 1050px) {
  .zpattern-space {
    gap: 6rem;
  }
}

@media (max-width: 600px) {
  .zpattern-space {
    gap: 3rem;
  }
  .title-volunteer {
    font-size: 5rem;
  }
}

@media (max-width: 500px) {
  .title-volunteer {
    font-size: 4rem;
  }
  .main-volunteer {
    padding: 1rem;
  }
}
</style>