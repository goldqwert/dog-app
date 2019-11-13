import React from 'react';
import dog from './dog.jpg'

import './Round.css'

class Round extends React.Component {


  render = () => {

    let isHiddenDog = this.props.randomIndex === this.props.index ? 'photo' : 'unphoto'
    // let onClickHandler = this.props.index === this.props.randomIndex ? this.killDog : () =>

    return (
      <div>
        <div className='item'>
          <img src={dog} onClick={this.props.onClickHandler} className={isHiddenDog} ></img>

        </div>
      </div>
    );
  }
}

export default Round;
