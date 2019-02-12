import React from 'react'
import Tweet from '../Tweet';

const tweetsList = props => (
  <ul className='list pa0'>
    {props.tweets.map(t => (
      <li key={t.id} className=''>
        <Tweet id={t.id} account={t.account} content={t.content} timestamp={t.timestamp} liked={t.liked} likeHandler={props.likeHandler} />
      </li>
    ))}
  </ul>
)

export default tweetsList;