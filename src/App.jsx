import { useEffect, useState } from 'react'
import { fetchCard } from './fetch'
import { Modal, ModalContent } from './components/modal'
import Header from './components/header'
import { ShowScore } from './components/showScore'
import CardList from './components/cardList'

const prepareCards = (setNextCards, setCards = false) => {
  if (setCards) {
    fetchCard().then(data => setCards(data))
  }

  fetchCard().then(data => setNextCards(data))
}

function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState("Default Content")
  const [cards, setCards] = useState([])
  const [nextCards, setNextCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const handleRuleButtonClick = () => {
    setModalOpen(true);
    setModalContent(<ModalContent />)
  }

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }, [score])

  useEffect(() => {
    console.log(bestScore)
  }, [bestScore])

  useEffect(() => {
    prepareCards(setNextCards, setCards)
  }, [])

  useEffect(() => {
    console.log(clickedCards)
  }, [clickedCards])

  return (
    <>
      <Header handleRuleButtonClick={handleRuleButtonClick} />

      <CardList
        cards={cards}
        setCards={setCards} 
        nextCards={nextCards} 
        setNextCards={setNextCards} 
        clickedCards={clickedCards} 
        setClickedCards={setClickedCards} 
        score={score} setScore={setScore} 
        prepareCards={prepareCards} 
      />

      <ShowScore score={score} bestScore={bestScore} />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  )
}

export default App;
