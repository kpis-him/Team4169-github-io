<script setup>
import Zpattern1 from "../components/Zpattern-1.vue";
import Zpattern2 from "../components/Zpattern-2.vue";
window.onload = function () {
  const formbar = document.getElementById("formbar");
  const openPopupButton = document.getElementById("open-popup-btn");
  const overlay = document.getElementById("overlay");
  const closePopupButton = document.getElementById("close-popup-btn");
  openPopupButton.addEventListener("click", () => {
    formbar.style.right = "0";
    overlay.style.display = "block";
    setTimeout(() => {
      overlay.style.opacity = "0.60";
    }, 10);

    document.body.classList.add(
      "overflow-hidden-compensate",
      "pointer-events-none",
      "fixed",
      "inset-0",
      "pr-2.5"
    );
  });
  const form = document.getElementById("inputForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const expertise = document.getElementById("expertise").value;
    const selectedValues = [];

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="message"]'
    );

    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    const response = await fetch("http://localhost:5050/form/volunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, expertise, selectedValues }),
    });

    if (response.status === 204) {
      form.reset();
      closeformbar();
      successBox.classList.remove("hidden");
      successBox.classList.add("flex");
      closeSuccessBox.addEventListener("click", () => {
        successBox.classList.add("hidden");
        successBox.classList.remove("flex");
      });
    } else {
      errorBox.classList.remove("hidden");
      errorBox.classList.add("flex");
      closeErrorBox.addEventListener("click", () => {
        errorBox.classList.add("hidden");
        errorBox.classList.remove("flex");
      });
    }
  });

  closePopupButton.addEventListener("click", () => {
    closeformbar();
  });

  function closeformbar() {
    formbar.style.right = "-400px";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
    document.body.classList.remove(
      "overflow-hidden-compensate",
      "pointer-events-none",
      "fixed",
      "inset-0",
      "pr-2.5"
    );
    formbar.removeEventListener("click", closeformbar);
  }
};
</script>

<template>
  <header id="header" class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2 title-volunteer"
    >
      Volunteer Today!
    </h2>
    <button
      id="open-popup-btn"
      class="bg-gray-500 hover:bg-gray-600 active:bg-gray-600 p-5 rounded shadow-md font-extrabold text-blue-200 m-8 text-base open-popup-btn"
      role="link"
    >
      Sign up &rarr;
    </button>
  </header>
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->

  <aside id="formbar" class="bg-slate-700 shadow-lg">
    <button
      id="close-popup-btn"
      class="right-5 absolute top-5 hover:text-gray-300 focus:outline-none p-1 bg-white text-gray-900 rounded-lg"
    >
      Close
    </button>
    <div class="pt-16 px-6">
      <form id="inputForm" class="text-white">
        <div class="mb-6">
          <label for="name" class="block text-sm font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br />
          <br />
          <label for="email" class="block text-sm font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br />
          <br />
          <label for="expertise" class="block text-sm font-bold"
            >List Your Experience:</label
          >
          <textarea
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
            id="expertise"
            name="expertise"
            rows="4"
            cols="50"
            required
          ></textarea>

          <br />
          <br />
          <label for="classes" class="block text-sm font-bold"
            >What Classes Can You Teach:</label
          ><br />
          <div class="ml-4 space-y-1">
            <label for="message1" class="flex items-center">
              <input
                type="checkbox"
                id="message1"
                name="message"
                value="Pico"
                class="mr-2"
              />
              <span class="text-gray-100">Pico</span>
            </label>

            <label for="message2" class="flex items-center">
              <input
                type="checkbox"
                id="message2"
                name="message"
                value="PyBasic"
                class="mr-2"
              />
              <span class="text-gray-100">Python Basic</span>
            </label>

            <label for="message3" class="flex items-center">
              <input
                type="checkbox"
                id="message3"
                name="message"
                value="PyAdv"
                class="mr-2"
              />
              <span class="text-gray-100">Python Advanced</span>
            </label>

            <label for="message4" class="flex items-center">
              <input
                type="checkbox"
                id="message4"
                name="message"
                value="Scratch"
                class="mr-2"
              />
              <span class="text-gray-100">Scratch</span>
            </label>

            <label for="message5" class="flex items-center">
              <input
                type="checkbox"
                id="message5"
                name="message"
                value="Unity"
                class="mr-2"
              />
              <span class="text-gray-100">Unity</span>
            </label>
            <label for="message5" class="flex items-center">
              <input
                type="checkbox"
                id="message5"
                name="message"
                value="Unity"
                class="mr-2"
              />
              <span class="text-gray-100"
                >Other (Web Dev, Writing Articles, etc.)</span
              >
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
      <div
        id="errorBox"
        class="hidden fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-10 gap-10"
      >
        <div
          class="bg-gray-700 p-20 m-10 rounded shadow flex-center justify-center text-center gap-10"
        >
          <p class="text-red-600 text-3xl font-extrabold">
            Failed to submit form
          </p>
          <button
            id="closeErrorBox"
            class="mt-2 px-10 py-3 bg-red-600 text-red-100 rounded"
          >
            Close
          </button>
        </div>
      </div>

      <div
        id="successBox"
        class="hidden fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-10 gap-10"
      >
        <div
          class="bg-green-500 p-20 m-10 px-32 rounded shadow flex-center justify-center text-center gap-10"
        >
          <p class="text-white text-3xl font-extrabold">Success!</p>
          <button
            id="closeSuccessBox"
            class="mt-2 px-10 py-3 bg-gray-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </aside>

  <main
    id="main"
    class="flex gap-x-80 top-44 mb-10 justify-center items-center main-volunteer"
  >
    <section class="flex flex-col gap-36 zpattern-space">
      <Zpattern1
        name="What Do We Expect In A Volunteer?"
        desc="
        At Programmatic, our commitment to education and empowering students extends beyond the bounds of our dedicated team. We wholeheartedly believe in the strength of collective effort, and as such, we are constantly seeking enthusiastic individuals to join us as volunteers in our mission. our volunteers play a crucial role in enhancing the learning experience of our students. Whether you are an experienced programmer or someone passionate about sharing your knowledge in programming and computer science, we invite you to become part of our community."
        imgurl="scratch.png"
      />
      <Zpattern1
        name="Why Vounteer?"
        desc="
      As a volunteer, you will have the chance to engage with students from diverse backgrounds and play a pivotal role in shaping their journey in coding, Scratch, Python, Raspberry Pi, and Unity. Your dedication and support will enable these students to gain essential skills for the digital age, equipping them to thrive in a world shaped by technological advancements. click the button below and become a part of our passionate community of educators and changemakers."
        imgurl="Unity.png"
      />
    </section>
  </main>

  <div
    id="overlay"
    class="fixed inset-0 bg-black opacity-50 pointer-events-none z-49"
  ></div>
</template>

<style scoped>
.bg--about {
  background-image: url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
  background-repeat: no-repeat;
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

#overlay {
  opacity: 0;
  display: none;
  transition: opacity 0.5s ease-in-out;
}

#formbar {
  pointer-events: all;
  width: 400px;
  position: fixed;
  top: 0;
  right: -400px;
  height: 100vh;
  z-index: 50;
  transition: right 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.overflow-hidden-compensate {
  overflow: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

.popup {
  overflow: hidden;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

/* media 1050 */
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
