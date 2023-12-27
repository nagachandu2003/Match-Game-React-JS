import './index.css'

const ScoreCard = props => {
  const {score, onPlayMore} = props
  const onPlayAgain = () => {
    onPlayMore()
  }
  return (
    <div className="score-bg">
      <div className="inner-bg">
        <img
          className="trophy-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <div className="bt">
          <button onClick={onPlayAgain} type="button" className="score-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p>PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default ScoreCard
