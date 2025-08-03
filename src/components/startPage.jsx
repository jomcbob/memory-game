import { useState, useEffect } from "react";

export default function StartPage({ setMainPageIsOpen, level, setLevel }) {
  const [selected, setSelected] = useState(null)

  const changeLevelToNumber = (level) => {
    if (level === 'easy') {
      return 100
    } else if (level === 'normal') {
      return 75
    } else {
      return 50
    }
  }

  useEffect(() => {
    if (selected !== null) {
      setLevel(changeLevelToNumber(selected))
    }
  }, [selected])

  return (
    <div className="startPage">
      <video autoPlay muted loop playsInline className="background-video">
        <source
          src={"/img/charizard.mp4"}
          type="video/mp4"
        />
      </video>

      <div className="startButtons">
        <div className="levels">
          <button className={selected === 'easy' ? 'selected' : ''} onClick={() => setSelected('easy')}>
            Easy
          </button>
          <button className={selected === 'normal' ? 'selected' : ''} onClick={() => setSelected('normal')}>
            Normal
          </button>
          <button className={selected === 'hard' ? 'selected' : ''} onClick={() => setSelected('hard')}>
            Hard
          </button>

        </div>
        <button onClick={() => setMainPageIsOpen(true)}>start game</button>
      </div>
    </div>
  );
}
