import React from 'react';
import './App.css'
import Item from './components/Item/Item'
import barks from './assets/audio/dog.mp3'


class App extends React.Component {

  state = {
    counter: 0,
    randomIndex: 3
  }

  dogBarks = React.createRef()

  componentDidMount = () => {
    setInterval(this.setRandomIndex, 2000);
  }

  setRandomIndex = () => {
    this.setState({
      randomIndex: Math.floor(Math.random() * 9)
    })
  }

  onClickDog = () => {
    this.dogBarks.current.currentTime = 0;
    this.dogBarks.current.play();
    this.setState({
      counter: this.state.counter + 1
    })
  }

  item = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  render = () => {
    return (
      <div className='wrapper'>
        <audio src={barks} ref={this.dogBarks}></audio>
        {this.item.map(i =>
          <Item key={i}
            index={i}
            randomIndex={this.state.randomIndex}
            onClickDog={this.onClickDog} />)}
        <div className='counter'>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
