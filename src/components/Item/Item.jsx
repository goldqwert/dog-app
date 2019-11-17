import React from 'react';
import './Item.css'
import dog from '../../assets/img/dog.jpg'

const Item = (props) => {
  debugger
  const randomHidden = props.isHidden === true ? 'photo' : 'photo show'

  return (
    <div className='item'>
      <img src={dog} alt="dog" className={randomHidden} />
    </div>
  )
}

export default Item;
