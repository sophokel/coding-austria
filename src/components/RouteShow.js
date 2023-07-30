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
        <div className="row" >
          <img 
            src={`/images/route${travel.id}.jpg`}
            className="result-pic" alt='travel'
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
              <p>{travel.date} um {travel.time}
               
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
     
    </Paper>
  );
}

export default RouteShow;
