import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import TinderCard from 'react-tinder-card'
import {hikes} from '../data/hikes';
import {
  PinDrop,
} from "@mui/icons-material";

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

function DestinationPage() {
  const [match, setMatch] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  useEffect(() => {
    document.title = "Swipe&Ride";
  }, [navigate]);

  return (
    <div className="card-container">
      {hikes.map((hike, index) => (
          <TinderCard className="swipe" key={hike.id} onSwipe={(dir) => swiped(dir, hike.name)} preventSwipe={['right', 'left']} onCardLeftScreen={() => outOfFrame(hike.name)}>
            <Paper key={hike.id} className="card" sx={{backgroundColor: 'violet'}}>
              <img src={`/images/hike${hike.id}.jpg`} alt={`hike${hike.id}`} className="card-img"/>
              <div className="card-text-top">
                <div className="card-text-icon">
                  <PinDrop />
                  <div className="card-text">{hike.hikeStart}</div>
                  <div className="card-text">nach</div>

                  <div className="card-text">{hike.hikeDestination}</div>
                </div>
              </div>
              <div className="card-text-bottom">
                <div className="card-headline">{hike.name}</div>
                <div className="card-text">{hike.date} | {hike.time}</div>
              </div>
            </Paper>
          </TinderCard>
      ))}
      {match ? <Paper>Test</Paper> : ''}
    </div>
  );
}

export default DestinationPage;
