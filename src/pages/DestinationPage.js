import React, {useEffect, useMemo, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import {IconButton, Paper} from "@mui/material";
import TinderCard from 'react-tinder-card'
import {hikes} from '../data/hikes';
import {
  AddCircle, AddCircleOutline,
  PinDrop,
  Redo,
  Undo
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
  const [currentIndex, setCurrentIndex] = useState(hikes.length - 1)
  const navigate = useNavigate();
  const [lastDirection, setLastDirection] = useState()
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
      () =>
          Array(hikes.length)
              .fill(0)
              .map((i) => React.createRef()),
      []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < hikes.length - 1

  const canSwipe = currentIndex >= 0

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  useEffect(() => {
    document.title = "Swipe&Ride";
  }, [navigate]);



  const swipe = async (dir) => {
    if (canSwipe && currentIndex < hikes.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
      <>
        <div className="card-container">
          {hikes.map((hike, index) => (
              <TinderCard
                  ref={childRefs[index]}
                  className='swipe'
                  key={hike.name}
                  onSwipe={(dir) => swiped(dir, hike.name, index)}
                  onCardLeftScreen={() => outOfFrame(hike.name, index)}
              >
                <Paper key={hike.id} className="card">
                  <img src={`/images/hike${hike.id}.jpg`} alt={`hike${hike.id}`} className="card-img"/>
                  <div className="card-text-top">
                    <div className="card-text-icon">
                      <PinDrop/>
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
        </div>
        <div className="button-container">
          <div className="button">
            <Undo onClick={() => swipe('left')} />
          </div>
          <div className="button"><Redo onClick={() => swipe('right')}/></div>
        </div>
      </>
  );
}

export default DestinationPage;
