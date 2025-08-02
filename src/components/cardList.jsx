import { useEffect, useState, useRef } from 'react'

export default function CardList({ cards, setCards, nextCards, setNextCards, clickedCards, setClickedCards, score, setScore, prepareCards, level }) {
  const cardBoxRef = useRef(null)
  const [lastClicked, setLastClicked] = useState(false)
  const [spinTrigger, setSpinTrigger] = useState(false);

  const buzzer = new Audio('./sounds/buzzer.mp3');
  const ding = new Audio('./sounds/ding.mp3');
  const woosh = new Audio('./sounds/woosh.mp3');

  const handleClick = (sound) => {
    sound.currentTime = 0;
    sound.play();
  };

  useEffect(() => {
    if (lastClicked && cardBoxRef.current) {
      setTimeout(() => {
        cardBoxRef.current?.focus()
      }, 10)
      setLastClicked(false)
    }
  }, [cards, lastClicked])
  

  return (
    <div 
      className='cardBox' 
      tabIndex={-1} 
      ref={cardBoxRef}
    >
      {cards.map((card) => (
        <button
          className={`card ${spinTrigger ? 'spin' : ''}`}
          key={card.name}
          tabIndex={0}
          onClick={() => {
            const isDuplicate = checkIfDuplicate(clickedCards, card.name)
          
            if (isDuplicate) {
              handleClick(buzzer)
              setScore(0)
              setClickedCards([])
            } else {
              handleClick(ding)
              const newClicked = [...clickedCards, card.name]
              setClickedCards(newClicked)
              setScore(score + 1)
            }
          
            setCards(nextCards)
            prepareCards(setNextCards, level, false)
          
            setSpinTrigger(false)
            setTimeout(() => setSpinTrigger(true), 100)
            setTimeout(() => handleClick(woosh), 200)
          }}     
        >
          <img src={card.url} alt="" /> {card.name}
        </button>
      ))}
    </div>
  );
}

const checkIfDuplicate = (array, item) => {
  return array.includes(item)
}