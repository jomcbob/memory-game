export default function StartPage({ setMainPageIsOpen, level, setLevel }) {
  const selected = (() => {
    if (level === 100) return 'easy'
    if (level === 75) return 'normal'
    if (level === 50) return 'hard'
    return null
  })()

  return (
    <div className="startPage">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={"/img/charizard.mp4"} type="video/mp4" />
      </video>

      <div className="startButtons">
        <div className="levels">
          <button className={selected === 'easy' ? 'selected' : ''} onClick={() => setLevel(100)}>Easy</button>
          <button className={selected === 'normal' ? 'selected' : ''} onClick={() => setLevel(75)}>Normal</button>
          <button className={selected === 'hard' ? 'selected' : ''} onClick={() => setLevel(50)}>Hard</button>
        </div>
        <button onClick={() => setMainPageIsOpen(true)}>start game</button>
      </div>
    </div>
  );
}
