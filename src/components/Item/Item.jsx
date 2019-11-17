import React from 'react';
import './Item.css'
import dog from '../../assets/img/dog.jpg'

const Item = (props) => {

  let isHiddenDog = props.randomIndex === props.index ? 'photo' : 'photo show'

  return (
    <div className='item'>
      <img onClick={props.onClickDog} src={dog} alt="dog" className={isHiddenDog} />
    </div>
  )
}

export default Item;
