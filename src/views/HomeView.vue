<script setup></script>
<template>
  <main class="bg--home irl flex-col justify-center text-center shadow-lg">
    <h3
      class="white-to-blue-text"
    >
      Welcome to
    </h3>
    <h1
      class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8"
    >
      Warrior Robotics
    </h1>
    <router-link to="/enroll"
      ><button
        class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8"
        role="link"
      >
        Get Started &rarr;
      </button></router-link
    >
  </main>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-10" />
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-8xl font-extrabold text-center text-white mt-5 mb-3 offer">
      Who Are We?
    </h2>
    <hr class="mx-auto w-1/4 mb-20 border border-purple-700" />
    <section class="flex flex-col justify-center gap-36">
      <div class="flex justify-center">
        <div class="flex justify-center flex-col">
          <p
            class="txt-custom-scr mt-2 mb-4 text-lg text-gray-300 justify-center text-center"
          >
            Warrior Robotics is an organization dedicated to bringing STEM to to the next generation of engineers, coders, and innovators.
            <br><br>
            We grow skills like problem solving and algorithmic thinking from the ground up, so nobody is too inexperienced to start learning and building <router-link to="/about" class="text-blue-500 underline">About us</router-link>
          </p>
        </div>
      </div>
    </section>
  </article>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-32" />
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-8xl font-extrabold text-center text-white mt-24 mb-3 offer">
      How Often do we meet?
    </h2>
    <hr class="mx-auto w-1/3 mb-24 border border-purple-700 mt-1" />
    <section class="flex flex-col justify-center gap-36">
      <div class="flex justify-center gap-24 items-center z-flex">
        <div class="image-container">
          <img class="w-custom-scr rounded" src="../assets/circuit.avif" alt="" />
        </div>
        <div>
          <p class="txt-custom mt-4 py-1 mb-4 text-lg text-gray-300">
            We have two components to our season: A Preseason and a build season
            <br><br>
            In the preseason, we use hands-on workshops and interactive demonstrations to put the innovation in your hands, so you can see, hold, iterate, and learn by creating.
            <br><br>
            In the build season, we make everything for our robot, including design, wiring, building and programming based on the game released every year: <a href="https://www.nefirst.org/"> NE FIRST </a>.
          </p>
        </div>
      </div>

      <!--  -->
      <!--  -->
      <!--  -->

      <div class="flex justify-center gap-24 items-center z-flex z-flip">
        <div>
          <h2
            class="txt-custom txt-title text-5xl font-extrabold py-5 text-white mt-1"
          >
            Join us!
          </h2>
          <p class="txt-custom mt-4 mb-4 py-1 text-lg text-gray-300">
            Want to join? Warrior Robotics is the perfect spot for programmers and
            developers who are interested in teaching computer science. Not only
            can you gain experience in honing in your technical abilites. You can choose to help hone your presentation skills to
            teach or work on expanding and developing Warrior Robotics' impact!
          </p>
          <router-link to="/volunteer" class="text-blue-500 underline">Join us!</router-link>
        </div>
        <div class="image-container">
          <img class="w-custom-scr rounded" src="../assets/car.png" alt="" />
        </div>
      </div>
    </section>
  </article>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-32" />
  <section class="flex flex-col justify-center mb-10 items-center">
    <h4 class="text-center text-5xl font-extrabold text-white mt-1 mb-10">
      Contact Us
    </h4>
    <p class="text-center text-2xl text-white m-5 contact">
      Got questions? Reach out to us! We're here to answer your inquiries,
      provide more information and guide you through the exciting journey ahead.
    </p>
    <h5 class="text-2xl text-center text-white font-bold p-2 gmail">
      paul_shultz@lsrhs.net
    </h5>
  </section>
</template>

<style scoped>
.contact {
  width: 1200px;
  max-width: 1200px;
  margin-top: 0;
}
.w-custom-scr {
  width: 500px;
}
.txt-custom-scr {
  width: 880px;
}

.bg--home {
  background-image: url("@/assets/team.png");
  background-repeat: no-repeat;
  width: calc(100vw - (100vw - 100%));
}

.image-container {
  display: inline-block;
  position: relative;
  /* Required for positioning the light effect */
}

.image-container img {
  border: 10px transparent;

  box-shadow: 0 0 20px rgba(131, 1, 131, 0.7);

  transition: box-shadow 0.75s ease-in-out;
}

.image-container:hover img {
  box-shadow: 0 0 30px rgb(100, 0, 128);
}

@media (max-width: 1630px) {
  .txt-custom {
    width: 500px;
  }
}

@media (max-width: 1250px) {
  .w-custom-scr {
    width: 400px;
  }

  .contact {
    width: 800px;
  }
}

@media (max-width: 1100px) {
  .txt-custom {
    width: 400px;
  }

  .contact {
    width: 600px;
  }

  .z-flex {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .z-flip {
    flex-direction: column-reverse;
  }

  .txt-title {
    padding-bottom: 0.1rem;
  }

  .txt-custom-scr {
    width: 680px;
  }
}

@media (max-width: 800px) {
  .name {
    font-size: 4rem;
  }

  .welcome {
    font-size: 2.5rem;
  }

  .txt-custom-scr {
    width: 450px;
  }

  .contact {
    width: 400px;
  }

  .name {
    font-size: 3.5rem;
  }

  .offer {
    font-size: 4rem;
  }

  .gmail {
    font-size: 1rem;
  }
}

@media (max-width: 500px) {
  .w-custom-scr {
    width: 300px;
  }
  .txt-custom {
    width: 300px;
  }
  .name {
    font-size: 3rem;
  }

  .welcome {
    font-size: 2rem;
  }

  .txt-custom-scr {
    width: 300px;
  }

  .contact {
    width: 300px;
  }

  .name {
    font-size: 2.5rem;
  }
}
</style>
