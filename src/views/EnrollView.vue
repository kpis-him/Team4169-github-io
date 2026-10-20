<script setup>
import pyicon from "../components/icons/IconPython.vue";
import unityicon from "../components/icons/IconUnity.vue";
import iconrpi from "../components/icons/IconRPI.vue";
import scratchicon from "../components/icons/IconScratch.vue";
import left from "../components/icons/IconLeft.vue";
import right from "../components/icons/IconRight.vue";
window.onload = function () {
  const formbar = document.getElementById("formbar");
  const openPopupButton = document.getElementById("open-popup-btn");
  const overlay = document.getElementById("overlay");
  const closePopupButton = document.getElementById("close-popup-btn");
  const errorBox = document.getElementById("errorBox");
  const closeErrorBox = document.getElementById("closeErrorBox");
  const successBox = document.getElementById("successBox");
  const closeSuccessBox = document.getElementById("closeSuccessBox");

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
    const enrolled = document.querySelector(
      'input[name="message"]:checked'
    ).value;
    const response = await fetch("http://localhost:5050/form/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, enrolled }),
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

  
  const wrapper = document.querySelector(".wrapper");
  const carousel = document.querySelector(".carousel");
  const firstCardWidth = carousel.querySelector(".cardEn").offsetWidth;
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const carouselChildrens = [...carousel.children];
  let isDragging = false,
    isAutoPlay = true,
    startX,
    startScrollLeft,
    timeoutId;

  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  // Insert copies of the last few cards to beginning of carousel for infinite scrolling
  carouselChildrens
    .slice(-cardPerView)
    .reverse()
    .forEach((card) => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
  // Insert copies of the first few cards to end of carousel for infinite scrolling
  carouselChildrens.slice(0, cardPerView).forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });
  // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");
  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  };
  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };
  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    }
  };

  function autoplay() {
    if (!isAutoPlay) return;
    carousel.scrollLeft += firstCardWidth;

    timeoutId = setTimeout(autoplay, 1000);
  }
  const toggleSwitch = document.getElementById("toggleSwitch");

  // Function to handle toggle switch state change
  function handleToggleChange() {
    const newState = toggleSwitch.checked;

    if (newState) {
      isAutoPlay = true;

      autoplay();
    } else {
      isAutoPlay = false;
      clearTimeout(timeoutId);
    }
  }
  autoplay();
  toggleSwitch.addEventListener("click", handleToggleChange);
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("scroll", infiniteScroll);
  wrapper.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    toggleSwitch.checked = false;
  });
};
</script>

<template>
  <h2
    class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1 font-extrabold text-8xl pb-2 mt-24 title text-center"
  >
    Start Learning today!
  </h2>
  <button
    id="open-popup-btn"
    class="bg-gray-500 hover:bg-gray-600 active:bg-gray-600 p-5 rounded shadow-md font-extrabold text-blue-200 m-5 text-base open-popup-btn"
    role="link"
  >
    Enroll Now &rarr;
  </button>
  <div class="gap-5 mb-5 flex bg-blue-800 p-2 rounded-sm Autoplay-btn">
    <h4 class="font-extrabold text-white text-2xl">Autoplay:</h4>
    <br />
    <label class="switch">
      <input type="checkbox" id="toggleSwitch" checked />
      <span class="slider"></span>
    </label>
  </div>
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
          <label for="enrolled" class="block text-sm font-bold">Class:</label
          ><br />
          <div class="ml-4 space-y-1">
            <label for="message1" class="flex items-center">
              <input
                type="radio"
                id="message1"
                name="message"
                value="Pico"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Pico</span>
            </label>

            <label for="message2" class="flex items-center">
              <input
                type="radio"
                id="message2"
                name="message"
                value="PyBasic"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Python Basic</span>
            </label>

            <label for="message3" class="flex items-center">
              <input
                type="radio"
                id="message3"
                name="message"
                value="PyAdv"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Python Advanced</span>
            </label>

            <label for="message4" class="flex items-center">
              <input
                type="radio"
                id="message4"
                name="message"
                value="Scratch"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Scratch</span>
            </label>

            <label for="message5" class="flex items-center">
              <input
                type="radio"
                id="message5"
                name="message"
                value="Unity"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Unity</span>
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

  <main id="main" class="flex px-6 mb-10">
    <section>
      <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left text-center">
          <left />
        </i>
        <ul class="carousel">
          <li class="cardEn">
            <div class="img">
              <scratchicon />
            </div>
            <h2 class="text-black font-extrabold">Scratch</h2>
            <h3 class="text-white font-bold pb-5">Beginner</h3>
            <p class="px-5 text-center text-white text-size">
              Scratch is a dynamic block code language developed by MIT,
              designed to teach kids how to code. Scratch Scratch is excellent
              at teaching beginners how to think logically, introducing
              important concepts and letting students explore without the
              addition of boilerplatey syntax.
            </p>
          </li>
          <li class="cardEn">
            <div class="img">
              <pyicon />
            </div>
            <h2 class="text-black font-extrabold">Python Basic</h2>
            <h3 class="text-white font-bold pb-5">Beginner-Intermediate</h3>
            <p class="px-5 text-center text-white text-size">
              This course jumps right into a text based programming language:
              Python. Python is a general purpose language developed by Guido
              van Rossum, and it is one of the easiest languages to learn.
              Despite its simpilicty, has been used in many important
              applications (i.e. machine learning).
            </p>
          </li>
          <li class="cardEn">
            <div class="img">
              <pyicon />
            </div>
            <h2 h2 class="text-black font-extrabold">Python Advanced</h2>
            <h3 class="text-white font-bold pb-5">Intermediate</h3>
            <p class="px-5 text-center text-white text-size">
              This course aims to focus on more advanced applications of Python.
              Rather than simply learning Python as a language, students will
              get to understand that languages are only tools. We'll dive into
              advanced language concepts (i.e. classes), data structures,
              algorithms, and real-world projects.
            </p>
          </li>
          <li class="cardEn">
            <div class="img">
              <unityicon />
            </div>
            <h2 class="text-black font-extrabold">Unity</h2>
            <h3 class="text-white font-bold pb-5">Intermediate-Advanced</h3>
            <p class="px-5 text-center text-white text-size">
              In this class, we'll take a look at Unity, an amazing
              cross-platform game engine that is used by many professionals to
              create popular games like Call of Duty, Pokemon Go, Beat Saber,
              and more! In this class, you'll learn, yourself, how to use this
              tool to create amazing games and projects.
            </p>
          </li>
          <li class="cardEn">
            <div class="img">
              <iconrpi />
            </div>
            <h2 class="text-black font-extrabold">Raspberry Pi</h2>
            <h3 class="text-white font-bold pb-5">Advanced</h3>
            <p class="px-5 text-center text-white text-size">
              Learn to use hardware alongside software to create exciting
              projects with the Raspberry Pi and the new Raspberry Pi Pico
              microcontroller. In this class you'll learn how software can
              interact with a real world enviorment
            </p>
          </li>
        </ul>
        <i id="right" class="fa-solid fa-angle-right">
          <right />
        </i>
      </div>
    </section>
  </main>

  <!-- <h1
    class="mb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-200 text-3xl text-center">
    Enroll Now, By Clicking The Enroll Button At
    The Top Of The Page</h1> -->
  <div
    id="overlay"
    class="fixed inset-0 bg-black opacity-50 pointer-events-none z-49"
  ></div>
</template>

<style scoped>
.bg--about {
  background-image: url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80");
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

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
}

.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  /* grid-auto-columns: calc((100% / 3) - 12px); */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.dragging .cardEn {
  cursor: grab;
  user-select: none;
}

.carousel :where(.cardEn, .img) {
  display: flex;
  /* justify-content: center; */
  padding-top: 1rem;
  align-items: center;
}

.carousel .cardEn {
  scroll-snap-align: start;
  list-style: none;
  background: rgb(95, 122, 122);
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
}

.carousel .cardEn .img {
  background: #04589877;
  height: 148px;
  width: 148px;
  border-radius: 50%;
  border-color: aqua;
  border-width: 2px;
}

.cardEn {
  width: 355px;
}

.cardEn .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}

.carousel .cardEn h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}

.carousel .cardEn span {
  color: #6a6d78;
  font-size: 1.31rem;
}

@media screen and (max-width: 1200px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }

  .text-size {
    width: 400px;
  }

  .carousel {
    width: 1000px;
  }
}

/* media 1150 */
@media screen and (max-width: 1150px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }

  .text-size {
    width: 400px;
  }

  .carousel {
    width: 800px;
  }

  .title {
    font-size: 5rem;
  }
}

/* media 900 */
@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }

  .text-size {
    width: 400px;
  }

  .carousel {
    width: 400px;
  }

  .title {
    font-size: 4.4rem;
  }
}

/* media 800 */

@media screen and (max-width: 800px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }

  .text-size {
    width: 400px;
  }

  .carousel {
    width: 400px;
  }

  .title {
    font-size: 3.3rem;
  }
}

/* media 600 */

@media screen and (max-width: 500px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }

  .text-size {
    width: 340px;
  }

  .carousel {
    width: 340px;
  }

  .title {
    font-size: 3.1rem;
  }
}

/* media 400 */

@media screen and (max-width: 400px) {
  .title {
    font-size: 2.8rem;
  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
