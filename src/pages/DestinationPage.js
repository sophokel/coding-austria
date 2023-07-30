import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import TinderCard from 'react-tinder-card'
import {hikes} from '../data/hikes';

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
          <TinderCard class="tinder-card" key={hike.id} onSwipe={(dir) => swiped(dir, hike.name)} preventSwipe={['right', 'left']} onCardLeftScreen={() => outOfFrame(hike.name)}>
            <Paper key={hike.id} className="card" sx={{backgroundColor: 'violet'}}>
              <img src={`/images/hike${hike.id}.jpeg`} alt={`hike${hike.id}`} className="tinder-card"/>
              <p>{hike.name}</p>
            </Paper>
          </TinderCard>
      ))}
      {match ? <Paper>Test</Paper> : ''}
    </div>
  );
}

export default DestinationPage;
