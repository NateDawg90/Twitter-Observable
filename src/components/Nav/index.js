import React from 'react';
import logoImage from '../../assets/twitter-black.png';
import Switch from 'react-toggle-switch';
import LikeCounter from '../LikeCounter';
import ClearButton from '../ClearButton';

const nav = props => (
  <nav className="dt w-100 flex justify-between items-center pa1  bg-white">
    <div className='flex items-center'>
      <img className='w2 h2 ml1 ml3-ns' src={logoImage} alt='logo' />
      <h2 className='ml5-ns dn flex-ns '>
        <span>Tweetzler</span>
      </h2>
    </div>
    <div className='flex  justify-around items-center'>
      <div className='flex items-center'>
        <span className='black-80 f6 mr1 mr2-ns'>all</span>
        <Switch  onClick={props.toggleFunc} on={props.toggleState}/>
        <span className='black-80 f6 ml1 ml0-ns mh2-ns'>liked</span>
      </div>
      <div className='mh2 mh3-ns '>
        <LikeCounter likes={props.likes}/>
      </div>
      <div className='mh1 mh2-ns'>
        <ClearButton clickHandler={props.clearFunc}/>
      </div>
    </div>
  </nav>
)

export default nav;