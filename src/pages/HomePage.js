import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import TinderCard from 'react-tinder-card'

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

function LandingPage() {
  const [match, setMatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Swipe&Ride";
  }, [navigate]);

  return (
    <div className="landing-page col center-all">
      <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        <Paper className="route-swipe-card">Test</Paper>
      </TinderCard>
      {match ? <Paper>Test</Paper> : ''}
    </div>
  );
}

export default LandingPage;
