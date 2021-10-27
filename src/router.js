  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "./views/Home";
  import ContentDetail from "./views/ContentDetail";
  import Board from "./views/Board";
  import Create from "./views/Create";

  Vue.use(VueRouter);

  const router = new VueRouter({
      mode: "history",
      routes: [{
              path: "/",
              name: "Home",
              component: Home
          },
          {
              path: "/board/free/detail/:contentId",
              name: "ContentDetail",
              component: ContentDetail
          },
          {
              path: "/board/free",
              name: "Board",
              component: Board
          },
          {
              path: "/board/free/create/:contentId?",
              name: "Create",
              component: Create
          },
      ]
  });

  export default router;