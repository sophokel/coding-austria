import {
  AccessTime,
  BubbleChart,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function RouteShow({ kiga, index, state }) {
  const navigate = useNavigate();

  const { searchParams } = state;

  const {
    driveStart,
  driveDestination,
    district,
    time, 
    date,
  } = searchParams;

  const showDetails = (e) => {
    e.preventDefault();
    navigate("/details", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  return (
    <Paper key={index} className="result-container" onClick={showDetails}>
      <div className="result-box col">
        <h3 className="result-headline">{kiga.name}</h3>
        <div className="row">
          <img
            alt="Kindergarten"
            src={`/images/default-photo.jpeg`}
            className="result-pic"
          />
          <div className="col result-infos">
            <div className="row center-vertical">
              <Map className="result-icon" />
              <p>{kiga.name}</p>
            </div>
            <div className="row center-vertical">
              <LocationOn className="result-icon" />
              <p>{district === "" ? kiga.district : district}</p>
            </div>
            <div className="row center-vertical">
              <AccessTime className="result-icon" />
              <p>{kiga.date} um {kiga.time}
              </p>
            </div>
            <div className="row center-vertical">
              <Public className="result-icon" />
              <p>{kiga.driveStart} - {kiga.driveDestination}
              
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Button
        variant="contained"
        className="result-button"
        startIcon={<Loupe />}
        sx={{ position: "absolute", bottom: "15px", right: "15px" }}
        onClick={showDetails}
      >
        Details
      </Button> */}
    </Paper>
  );
}

export default RouteShow;
