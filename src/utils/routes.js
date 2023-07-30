// NOT USED

import HomePage from "../pages/DestinationPage";
import CreatePage from "../pages/CreatePage";
import AllRoutesPage from "../pages/AllRoutesPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/create", component: CreatePage, title: "Erstellen" },
  {
    path: "/routes",
    component: AllRoutesPage,
    title: "Liste der verfügbaren Kindergärten",
  },
];

export default routes;
