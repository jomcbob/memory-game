function ShowScore({ score, bestScore }) {
  return(
    <>
      <div className="scoreButtons">
        <div className="scoreButton">Score {score}</div>
        <div className="scoreButton">Best Score {bestScore}</div>
      </div>
    </>
  )
}

export { ShowScore }