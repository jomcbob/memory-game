import { useEffect, useState, useRef } from 'react'
import { ModalGameOver } from './modal'

export default function CardList({ setMainPageIsOpen, cards, setCards, nextCards, setNextCards, clickedCards, setClickedCards, score, setScore, prepareCards, level, setModalOpen, setModalContent }) {
  const cardBoxRef = useRef(null)
  const [lastClicked, setLastClicked] = useState(false)
  const [shouldSpin, setShouldSpin] = useState(false)
  const cardRefs = useRef([])
  cardRefs.current = []

  const buzzer = new Audio('./sounds/buzzer.mp3');
  const ding = new Audio('./sounds/ding.mp3');
  const woosh = new Audio('./sounds/woosh.mp3');
  const womp = new Audio('./sounds/womp.mp3');

  const handleClick = (sound, time = 0) => {
    sound.currentTime = time
    sound.volume = 1.0
    sound.play()
  }

  useEffect(() => {
    if (lastClicked && cardBoxRef.current) {
      setTimeout(() => {
        cardBoxRef.current?.focus()
      }, 10)
      setLastClicked(false)
    }
  }, [cards, lastClicked])

  const setCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (!shouldSpin) return
  
    cardRefs.current.forEach((cardEl) => {
      cardEl.animate(
        [
          { transform: 'rotateY(360deg)' },
          { transform: 'rotateY(0deg)' }
        ],
        {
          duration: 600,
          easing: 'ease-in-out',
          fill: 'forwards'
        }
      )
    })
  
    const timeout = setTimeout(() => setShouldSpin(false), 600)
    return () => clearTimeout(timeout)
  }, [shouldSpin])
  
  
  return (
    <div 
      className='cardBox' 
      tabIndex={-1} 
      ref={cardBoxRef}
    >
      {cards.map((card) => (
        <button
          className={`card`}
          key={card.name}
          tabIndex={0}
          ref={setCardRef}
          onClick={() => {
            const isDuplicate = checkIfDuplicate(clickedCards, card.name)
            setLastClicked(card.name)
          
            if (isDuplicate) {
              handleClick(buzzer, 0.3)
              setScore(0)
              setClickedCards([])
              setShouldSpin(false)  
              console.log(lastClicked, 'is a duplicate!')
              setModalContent(<ModalGameOver setMainPageIsOpen={setMainPageIsOpen} setModalOpen={setModalOpen} sound={() => handleClick(womp)} />)
              setModalOpen(true)
            } else {
              handleClick(ding)
              const newClicked = [...clickedCards, card.name]
              setClickedCards(newClicked)
              setScore(score + 1)
              handleClick(woosh, 0.1)
              setShouldSpin(true)  
            }
          
            setCards(nextCards)
            prepareCards(setNextCards, level, false)
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