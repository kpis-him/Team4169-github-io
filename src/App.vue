<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="nav w-full text-white shadow-md text-xl font-extrabold ubpixel-antialiased fixed flex top-0 py-4 px-20 bg-gray-900 z-50 items-center"
  >
    <input type="checkbox" id="nav-check" />
    <div class="nav-header flex items-center">
      <RouterLink to="/" tag="img" class="w-10 h-10">
        <img class="w-10" src="./assets/logo.png" />
      </RouterLink>

      <RouterLink to="/">Programmatics</RouterLink>
    </div>
    <div class="nav-btn items-center h-full flex justify-center">
      <label for="nav-check" class="p-2">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <ul class="nav-list items-center list-none">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <divz
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></divz>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <router-link to="/team">Our Team</router-link>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <router-link to="/enroll">Enroll</router-link>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <router-link to="/volunteer">Volunteer</router-link>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li>
        <router-link to="/articles">Articles</router-link>
      </li>
      <div
        class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"
      ></div>
      <li class="items-center justify-center self-center w-8 h-8">
        <router-link to="https://discord.gg/PGUc95ZRYk">
          <img class="w-8" src="./assets/discord.png"
        /></router-link>
      </li>
      <li class="items-center justify-center self-center w-8 h-8">
        <router-link to="https://www.instagram.com/programmatics_official/">
          <img class="w-8" src="./assets/instagram.png"
        /></router-link>
      </li>
    </ul>
  </nav>

  <RouterView />
  <footer class="bg-gray-800 text-white py-8 w-full bottom-0 footer">
    <div class="">
      <div class="flex justify-center gap-20 footer-div">
        <div class="flex justify-center items-center gap-4">
          <img
            src="./assets/logo.png"
            alt="Programmatic Logo"
            class="w-10 h-10"
          />
          <div>
            <h1 class="font-extrabold text-xl">Programmatic</h1>
          </div>
        </div>
        <div class="flex gap-7 items-center justify-center">
          <ul
            class="flex gap-7 items-center justify-center link-list list-none"
          >
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <router-link to="/team">Our Team</router-link>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <router-link to="/enroll">Enroll</router-link>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <router-link to="/volunteer">Volunteer</router-link>
            </li>
            <div class="bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <li>
              <router-link to="/articles">Articles</router-link>
            </li>
          </ul>
        </div>
        <div class="flex gap-12 justify-center items-center">
          <h1 class="font-bold text-lg mt-1">Socials:</h1>
          <router-link
            href="https://www.instagram.com/programmatics_official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/instagram.png" alt="Instagram" class="w-8 h-8" />
          </router-link>
          <router-link
            href="https://discord.gg/PGUc95ZRYk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/discord.png" alt="Discord" class="w-7 h-8" />
          </router-link>
          <router-link href="mailto:programmaticteams@gmail.com">
            <img src="./assets/gmail.png" alt="Gmail" class="w-8 h-7" />
          </router-link>
        </div>
      </div>
      <div>
        <p class="text-center para text-white mb-5 pt-6">
          Programmatic is an organization dedicated to teaching the next
          generation of students the fundamentals of engineering and computer science.
        </p>
      </div>
    </div>
  </footer>
</template>
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Segoe UI";
}

.nav > .nav-header {
  flex: 0.95;
  padding-left: 1rem;
}

.nav > .nav-list {
  display: flex;
  gap: 2rem;
}

.nav > #nav-check {
  display: none;
}
@media (max-width: 1280px) {
  .nav-list {
    margin-top: 28px;
  }

  .nav-list > li {
    margin-top: 0.5rem !important;
  }

  .nav {
    padding-left: 0px !important;
  }
  .nav > .nav-btn {
    position: absolute;
    right: 0;
    top: 0;
    padding-top: 0.2rem;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    /* find a darker color */
    background: rgb(31, 41, 55);
    height: 0;
    transition: all 0.3s ease-in;
    top: 40px;
    left: 0;
    overflow: hidden;
  }
  .nav > .nav-list > li {
    width: 100%;
    margin-top: 1.5rem;
  }
  .nav > #nav-check:checked ~ .nav-list {
    margin-top: 30px;
    height: calc(100vh - 50px);
  }
}

.para {
  font-size: clamp(0.7rem, 1.5vw, 1rem);
}

@media screen and (max-width: 1350px) {
  .footer-div {
    flex-direction: column;
  }
  /* .footer {
    padding-bottom: 0;
  } */
}
/* media for phone screens */
@media screen and (max-width: 900px) {
  .link-list {
    flex-direction: column;
    gap: 0.7rem !important;
  }
}
/* media 500 */
</style>
