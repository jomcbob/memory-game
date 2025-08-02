import { useEffect, useState, useRef } from 'react'

export default function CardList({ cards, setCards, nextCards, setNextCards, clickedCards, setClickedCards, score, setScore, prepareCards }) {
  const cardBoxRef = useRef(null)
  const [lastClicked, setLastClicked] = useState(false)

  useEffect(() => {
    if (lastClicked && cardBoxRef.current) {
      cardBoxRef.current.focus()
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
          className='card'
          key={card.name}
          tabIndex={0}
          onClick={() => {
            const isDuplicate = checkIfDuplicate(clickedCards, card.name)

            if (isDuplicate) {
              alert('you lost, best score - ' + score)
              setScore(0)
              setClickedCards([])
            } else {
              const newClicked = [...clickedCards, card.name]
              setClickedCards(newClicked)
              setScore(score + 1)
              console.log("keep it coming! score is " + (score + 1))
            }

            setCards(nextCards)
            prepareCards(setNextCards, false)
            setLastClicked(true)
            console.log(card.name, 'was clicked')
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