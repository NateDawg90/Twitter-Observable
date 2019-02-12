import React, { Component } from 'react'
import moment from 'moment';
import devloper from '../../assets/devloper.jpg';
import commitstrip from '../../assets/commitstrip.jpg';
import awardsdarwin from '../../assets/awardsdarwin.jpg';

class Tweet extends Component {
  state = {
    liked: false
  }

  render () {
    var imgSource = null;
    if (this.props.account === 'iamdevloper') {
      imgSource = devloper;
    } else if (this.props.account === 'CommitStrip') {
      imgSource = commitstrip;
    } else if (this.props.account === 'AwardsDarwin') {
      imgSource = awardsdarwin;
    }
    return (
      <div className='flex flex-column w4 bt b--light-gray bg-white w-100 pa2'>
        <div className='flex items-center'>
          {imgSource === null &&
            <i className="fas fa-user-circle fa-3x pa1"></i>
          }
          <img className='br-100 w3 h3' src={imgSource} alt='profpic' />
          <div className='flex flex-column'>
            <div className='flex pa2 black-60'>
              <div className='pr2 fw5 black'>@{this.props.account}</div>&bull;
              <div className='pl2 f5'>{moment(this.props.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
            <div className='pa2 mb2 f5'>{this.props.content}</div>
          </div>
        </div>
        <div className='flex self-center mb1 pointer dim' onClick={this.props.likeHandler(this.props.id)}>
          {this.props.liked && 
            <i className="fas fa-heart"></i>
          }
          {!this.props.liked && 
            <i className="far fa-heart"></i>
          }
        </div>
      </div>
    )
  }
}

export default Tweet;