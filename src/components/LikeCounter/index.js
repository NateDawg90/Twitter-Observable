import React from 'react'
import DigitRoll from 'digit-roll-react';
import './index.css'

const likeCounter = props =>  (
    <div className='flex flex-column items-center'>
      <DigitRoll num={props.likes} length={2} divider="" delay="1" />
      <span className='f7 black-80'>likes</span>
    </div>
)

export default likeCounter;