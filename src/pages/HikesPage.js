
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import TinderCard from 'react-tinder-card';
import {
    AccessTime,
    LocationOn,
    Map,
  } from "@mui/icons-material";
  import { Paper, Chip } from "@mui/material";
import { hikes } from "../data/hikes";

const onSwipe = (direction) => {
    if (direction === 'left') {
      console.log('You swiped left');
    } else if (direction === 'right') {
      console.log('You swiped right');
    }
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
function HikesPage() {
    const [match, setMatch] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Swipe&Ride";
      }, [navigate]);

    return (
        <div>
       <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        <Paper className="route-swipe-card" sx={{backgroundColor: 'violet'}}>{hikes.map((hike)=> <Paper>
          <div className="result-box col">
            <img
              alt="Kindergarten"
              src={`/images/default-photo.jpeg`}
              className="result-pic"
            />
            <div className="col">
              <h3 className="detail-headline">{hike.name}</h3>
              <div className="row center-vertical">
                <Map className="result-icon" />
                <p> {hike.driveStart} - {hike.driveDestination}</p>
              </div>
              <div className="row center-vertical">
                <LocationOn className="result-icon" />
                <p>{hike.district}</p>
              </div>
              <div className="row center-vertical">
                <AccessTime className="result-icon" />
                <p>{hike.date} um {hike.time}<br /> 
                </p>
              </div>          
            </div>
            <div className="row chip-box">
              <div className="col chip-box-col">
                <Chip
                  label={hike.district}
                  color="primary"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
       
            <div className="hike-text">
              
            </div>
          </div>
        </Paper>) }
        </Paper>
      </TinderCard>
      {match ? <Paper>Test</Paper> : ''}
        </div>
    );
}

export default HikesPage;