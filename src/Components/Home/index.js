import './index.css'
import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import ScoreCard from '../ScoreCard'

class Home extends Component {
  state = {
    category: 'FRUIT',
    score: 0,
    thumbnailObj: {
      id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
      category: 'FRUIT',
    },
    startTime: 60,
    isGameRunning: true,
  }

  componentDidMount = () => {
    this.id = setInterval(this.onStartTimer, 1000)
  }

  onStartTimer = () => {
    const {startTime} = this.state
    if (startTime === 0) clearInterval(this.id)
    this.setState(prevState => ({
      startTime: parseInt(prevState.startTime) - 1,
    }))
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const getImgObj = imagesList[Math.floor(Math.random() * 30)]
    this.setState({thumbnailObj: getImgObj})
  }

  onPlayMore = () => {
    this.setState({score: 0, startTime: 60})
  }

  onClickTab = value => {
    this.setState({category: value})
  }

  onClickImage = value => {
    const {thumbnailObj, score} = this.state
    const {id} = thumbnailObj
    if (id === value) {
      this.getRandomImage()
      this.setState({score: score + 1})
    } else {
      this.setState({isGameRunning: false})
    }
  }

  render() {
    const {category, score, thumbnailObj, startTime, isGameRunning} = this.state
    const {imagesList, tabsList} = this.props
    const filteredData = imagesList.filter(ele => ele.category === category)
    const {imageUrl} = thumbnailObj
    if (startTime === 0 || isGameRunning === false) clearInterval(this.id)
    return (
      <div className="main-container">
        <div className="nav-container">
          <img
            className="nav-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="timer-container">
            <li>
              <p className="nav-text">
                Score: <span className="nav-time">{score}</span>
              </p>
            </li>
            <li>
              <div className="timer-container">
                <img
                  className="nav-timer"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                  alt="timer"
                />
                <p className="nav-time">{startTime} sec</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg">
          {startTime === 0 || isGameRunning === false ? (
            <ScoreCard score={score} onPlayMore={this.onPlayMore} />
          ) : (
            <div className="bg2">
              <div className="image-container">
                <img className="viewable-image" src={imageUrl} alt="match" />
              </div>
              <ul className="list-container1">
                {tabsList.map(ele => (
                  <TabItem
                    key={ele.tabId}
                    tabDetails={ele}
                    onClickTab={this.onClickTab}
                  />
                ))}
              </ul>
              <ul className="list-container2">
                {filteredData.map(ele => (
                  <ImageItem
                    key={ele.id}
                    imageDetails={ele}
                    onClickImage={this.onClickImage}
                  />
                ))}
              </ul>
              <ul className="si">
                <li />
                <li />
                <li />
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
