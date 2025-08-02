import { FocusTrap } from 'focus-trap-react'

function ModalContent() {
  return (
    <>
      <div>
        <h2>How to Play the Memory Card Game</h2>
        <p><strong>Objective:</strong> Click on as many unique cards as possible without clicking the same card twice.</p>
        <p><strong>Gameplay:</strong></p>
        <ul>
          <li>Cards are displayed face up showing images.</li>
          <li>Each time you click a card, all cards shuffle randomly—their positions change.</li>
          <li>Your goal is to remember which cards you’ve already clicked and avoid clicking them again.</li>
        </ul>
        <p><strong>Scoring:</strong></p>
        <ul>
          <li>Each unique card clicked increases your current score by 1.</li>
          <li>Clicking a card you’ve already clicked resets your current score to zero.</li>
          <li>Your best score tracks the highest number of unique cards clicked in a row.</li>
        </ul>
        <p><strong>Game Over:</strong> Clicking the same card twice resets your score. Try again to beat your best score.</p>
        <p><strong>Tips:</strong> Pay close attention and remember cards before they shuffle. Avoid repeating clicks on the same card.</p>
      </div>

    </>
  )
}

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div className="modalOverlay" onClick={onClose}>
        <div className="modalContent" onClick={e => e.stopPropagation()}>
          <button className='flameButton' onClick={onClose} aria-label="Close modal">✖</button>
          {children}
        </div>
      </div>
    </FocusTrap>
  );
}


export { Modal, ModalContent}