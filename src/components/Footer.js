import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  PinDrop,
  PinDropOutlined,
  Route,
  RouteOutlined,
  AddCircleOutline,
  AddCircle,
} from "@mui/icons-material";

function Footer({ route }) {
  const navigate = useNavigate();

  const openDestination = () => {
    navigate("/destination");
  };

  const openInfo = () => {
    navigate("/createRoute");
  };

  const handleClickAllRoutesList = () => {
    navigate("/allRoutes", {
      state: {
        travel: {},
        searchParams: {
          district: "",
          allOpeningHours: [],
          allGroupSizes: [],
          allAgeGroups: [],
          publicOrPrivate: "",
        },
      },
    });
  };

  return (
    <div className="footer">
      <div className="footer-menu footer-menu-left col center-vertical">
        <IconButton
          onClick={openInfo}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "createRoute" ? (
            <AddCircle />
          ) : (
            <AddCircleOutline />
          )}
        </IconButton>
        <p>Erstellen</p>
      </div>

      <div className="footer-menu col center-vertical">
        <IconButton
          onClick={openDestination}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "destination" ? <PinDrop /> : <PinDropOutlined />}
        </IconButton>
        <p>Ausflugsziel</p>
      </div>

      <div className="footer-menu footer-menu-right col center-vertical">
        <IconButton
          onClick={handleClickAllRoutesList}
          color="secondary"
          sx={{ padding: "0 0 5px 0" }}
        >
          {route === "allRoutes" ? <Route /> : <RouteOutlined />}
        </IconButton>
        <p>Route</p>
      </div>
    </div>
  );
}

export default Footer;
