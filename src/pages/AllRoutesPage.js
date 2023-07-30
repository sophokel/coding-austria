import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { allRoutes } from "../data/routes";
import RouteShow from "../components/RouteShow";
import { FilterAlt } from "@mui/icons-material";
import { sortObjectsByName } from "../utils/utils";

function AllRoutesPage({ title }) {
  const [searchField, setSearchField] = useState("");
  const { pathname, state } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const sortedRoutes = sortObjectsByName(allRoutes);

  const routes = sortedRoutes.filter((route) => {
    return route.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center-all">
        <h3 className="headline">Wähle die passende Route</h3>
      </div>
      <div className="row search-field center-vertical">
        <FilterAlt sx={{ color: "secondary", mr: 1, my: 0.5 }} />
        <TextField
          variant="outlined"
          fullWidth
          color="secondary"
          id="search"
          label="Nach Name filtern"
          onChange={handleChange}
        />
      </div>
      {routes.map((route, index) => (
        <RouteShow key={index} travel={route} state={state} />
      ))}
      <div className="bottom-spacer"></div>
    </div>
  );
}

export default AllRoutesPage;
