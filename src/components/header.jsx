export default function Header({ handleRuleButtonClick}) {
  return (
    <header>
      <div className="name">Project: Memory Card</div>
      <div className="headerButtons">
        <button className="flameButton rules" onClick={handleRuleButtonClick}>Rules</button>
      </div>
    </header>
  )
}