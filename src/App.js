import React from 'react';
import './App.css';
import Round from './Round';
import dogAudio from './dog.mp3'

class App extends React.Component {

  state = {
    randomIndex: 10,
    counter: 0
  }

  playDogAudio = React.createRef();

  componentDidMount = () => {
    setInterval(this.setRandomIndex, 2000)
  }

  setRandomIndex = () => {
    this.setState({
      randomIndex: Math.floor(Math.random() * 9)
    })
  }

  incCounter = () => {
    this.playDogAudio.current.currentTime = 0;
    this.playDogAudio.current.play();
    this.setState({
      counter: this.state.counter + 1
    })
  }

  item = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  render = () => {

    return (
      <div className="wrapper" >
        <audio src={dogAudio} ref={this.playDogAudio}></audio>
        {this.item.map(i =>
          <Round key={i}
            index={i}
            randomIndex={this.state.randomIndex}
            onClickHandler={this.incCounter}
          />
        )}
        <div>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
