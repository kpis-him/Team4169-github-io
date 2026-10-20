import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TeamView from "../views/OurTeamView.vue";
import VolunteerView from "../views/VolunteerView.vue";
import EnrollView from "../views/EnrollView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import Admin from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
    },
    {
      path: "/enroll",
      name: "Enroll",
      component: EnrollView,
    },
    {
      path: "/volunteer",
      name: "volunteer",
      component: VolunteerView,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },

    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },

    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});

export default router;
