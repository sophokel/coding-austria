// NOT USED

import HomePage from "../pages/DestinationPage";
import CreateRoutePage from "../pages/CreateRoutePage";
import AllRoutesPage from "../pages/AllRoutesPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/createRoute", component: CreateRoutePage, title: "Erstellen" },
  {
    path: "/routes",
    component: AllRoutesPage,
    title: "Liste der verfügbaren Kindergärten",
  },
];

export default routes;
