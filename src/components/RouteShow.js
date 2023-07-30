import {
  AccessTime,
  BubbleChart,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { joinAbbreviations } from "../utils/utils";

function RouteShow({ travel, index, state }) {
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
        travel,
        searchParams,
      },
    });
  };

  return (
    <Paper key={index} className="result-container" onClick={showDetails}>
      <div className="result-box col">
        <h3 className="result-headline">{travel.name}</h3>
        <div className="row">
          <img
            src={`/images/default-photo.jpeg`}
            className="result-pic"
          />
          <div className="col result-infos">
            <div className="row center-vertical">
              <Map className="result-icon" />
              <p>{travel.name}</p>
            </div>
            <div className="row center-vertical">
              <LocationOn className="result-icon" />
              <p>{district === "" ? travel.district : district}</p>
            </div>
            <div className="row center-vertical">
              <AccessTime className="result-icon" />
              <p>{travel.time}
               
              </p>
            </div>
            <div className="row center-vertical">
              <BubbleChart className="result-icon" />
              <p>{travel.date}
                {/* {allGroupSizes.length === 0
                  ? kitravelga.groupSizes.join(", ")
                  : groupSizes} */}
              </p>
            </div>
            <div className="row center-vertical">
              <Public className="result-icon" />
              <p>{travel.driveStart} - {travel.driveDestination}
              
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
