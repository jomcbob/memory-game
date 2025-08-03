import { useEffect, useState } from 'react'
import { fetchCard } from './fetch'
import { Modal, ModalContent } from './components/modal'
import Header from './components/header'
import { ShowScore } from './components/showScore'
import CardList from './components/cardList'
import StartPage from './components/startPage'

const prepareCards = (setNextCards, level, setCards = false) => {
  if (setCards) {
    fetchCard(level).then(data => setCards(data))
  }

  fetchCard(level).then(data => setNextCards(data))
}

function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState("Default Content")
  const [cards, setCards] = useState([])
  const [nextCards, setNextCards] = useState([])
  const [clickedCards, setClickedCards] = useState([])
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [mainPageIsOpen, setMainPageIsOpen] = useState(false)
  const [animateMainPage, setAnimateMainPage] = useState(false)
  const [level, setLevel] = useState(70)

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
    prepareCards(setNextCards, level, setCards)
  }, [level])

  useEffect(() => {
    if (mainPageIsOpen) {
      setTimeout(() => setAnimateMainPage(true), 10)
    } else {
      setTimeout(() => setAnimateMainPage(false), 10)
    }
  }, [mainPageIsOpen])

  useEffect(() => {
    console.log(clickedCards)
  }, [clickedCards])

  return (
    <>

    {!mainPageIsOpen && (
      <>
        <StartPage setLevel={setLevel} level={level} setMainPageIsOpen={setMainPageIsOpen} />
      </>
    )}

      {mainPageIsOpen && (
        <div className={`mainPage ${animateMainPage ? 'show' : ''}`}>
          <Header handleRuleButtonClick={handleRuleButtonClick} />
  
          <CardList
            cards={cards}
            setCards={setCards}
            nextCards={nextCards}
            setNextCards={setNextCards}
            clickedCards={clickedCards}
            setClickedCards={setClickedCards}
            score={score}
            setScore={setScore}
            prepareCards={prepareCards}
            level={level}
            setModalOpen={setModalOpen}
            setModalContent={setModalContent}
            setMainPageIsOpen={setMainPageIsOpen}
          />
  
          <ShowScore score={score} bestScore={bestScore} />
  
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            {modalContent}
          </Modal>
        </div>
      )}
    </>
  )  
}

export default App;
