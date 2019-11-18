import React from 'react';
import './App.css'
import Item from './components/Item/Item'
import barks from './assets/audio/dog.mp3'


class App extends React.Component {

    state = {
        items: [
            { id: 0, isHidden: false },
            { id: 1, isHidden: false },
            { id: 2, isHidden: false },
            { id: 3, isHidden: false },
            { id: 4, isHidden: false },
            { id: 5, isHidden: false },
            { id: 6, isHidden: false },
            { id: 7, isHidden: false },
            { id: 8, isHidden: false }
        ],
        counter: 0
    }



    componentDidMount = () => {
        setInterval(this.getRandomImageId, 500);
    }

    getRandomImageId = () => {
        let randomImageId = Math.floor(Math.random() * 8);
        let newItems = this.state.items.map(el => {
            if (el.id === randomImageId) {
                return { ...el, isHidden: true }
            } else {
                return { ...el, isHidden: false }
            }
        });
        this.setState({
            items: newItems
        })
    };

    incCount = () => {
        let incAudio = new Audio(barks)
        incAudio.play()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render = () => {
        return (
            <div className='wrapper'>
                {this.state.items.map(i =>
                    <Item id={i.id} isHidden={i.isHidden}
                        incCount={this.incCount} />
                )}
                <div className='counter'>{this.state.counter}</div>
            </div>
        );
    }
}

export default App;
