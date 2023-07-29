// NOT USED

import HomePage from "../pages/DestinationPage";
import CreatePage from "../pages/CreatePage";
import SearchPage from "../pages/SearchPage";
import AllRoutesPage from "../pages/AllRoutesPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/create", component: CreatePage, title: "Erstellen" },
  { path: "/search", component: SearchPage, title: "Suche" },
  {
    path: "/routes",
    component: AllRoutesPage,
    title: "Liste der verfügbaren Kindergärten",
  },
];

export default routes;
