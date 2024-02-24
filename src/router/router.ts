import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/Home.vue";
import GithubProfile from "./../components/GithubProfile.vue";
import Review from "./../components/Review.vue";
import ExpandableImage from "../components/ExpandableImage.vue";
import DragDrogUpload from "../components/DragDropUpload.vue";
import LiveSearch from "../components/LiveSearch.vue";
import DraggableSlider from "../components/DraggableSlider.vue";
import Payment from "../components/Payment.vue";
import Todo from "../components/todo/Todo.vue";
import PagePosition from "../components/PagePosition.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/todo",
      name: "Todo List",
      component: Todo,
   },
   {
      path: "/payment",
      name: "Payment",
      component: Payment,
   },
   {
      path: "/review",
      name: "Reviews",
      component: Review,
   },
   {
      path: "/expandable-image",
      name: "Expandable Image",
      component: ExpandableImage,
   },
   {
      path: "/github-profile-search",
      name: "Github Profile Search",
      component: GithubProfile,
   },
   {
      path: "/drag-drag-upload",
      name: "Drag Drop Upload",
      component: DragDrogUpload,
   },
   {
      path: "/live-search",
      name: "live Search",
      component: LiveSearch,
   },
   {
      path: "/draggable-slider",
      name: "Draggable Slider",
      component: DraggableSlider,
   },
   {
      path: "/page-position",
      name: "Page Position",
      component: PagePosition,
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

export { router, routes };
