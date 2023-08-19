import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {fruit1: 0, fruit2: 0}

  onEatMango = () => {
    this.setState(prevState => ({fruit1: prevState.fruit1 + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({fruit2: prevState.fruit2 + 1}))
  }

  render() {
    const {fruit1, fruit2} = this.state
    return (
      <div className="fruits-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <spin className="fruit">{fruit1} </spin> mangoes
            <spin className="fruit"> {fruit2} </spin> bananas
          </h1>
          <div className="img-container">
            <div className="img-container-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango"
              />
              <button
                className="mango-btn"
                type="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="img-container-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="banana"
              />
              <button
                className="banana-btn"
                type="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
