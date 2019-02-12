import React, { Component } from 'react';
import 'react-toggle-switch/dist/css/switch.min.css';
import tweets from './getTweets.js';
import TweetsList from './components/TweetsList';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  state = {
    tweets: [],
    likes: 0,
    likedTweetsToggle: false
  }

  componentDidMount() {
    tweets.subscribe(this.addTweet);
  }

  addTweet = tweet => {
    var tweets = this.state.tweets;
    tweet["liked"] = false;
    tweet["id"] = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    tweets.unshift(tweet);

    var newTweets = tweets.filter(t => {
      return Date.now() - t.timestamp < 30000;
    })
    var likes = newTweets.filter(t => t.liked).length;
    this.setState({ 
      tweets: newTweets,
      likes: likes 
    })
  }

  tweetLikeHandler = key => {
    return e => {
      var tweets = this.state.tweets;

      var tweet = tweets.find(i => i.id === key);
      var liked = tweet.liked;
      tweet["liked"] = !liked;
      this.setState({
        tweets,
        likes: this.state.likes + (liked ? -1 : 1)});
    }
  } 

  clearButtonPressedHandler = e => {
    var tweets = [];
    var likes = 0;
    this.setState({ tweets, likes });
  }

  toggleSwitch = () => {
      this.setState({
        likedTweetsToggle: !this.state.likedTweetsToggle
      });
  };

  shownTweets = () => {
    var tweets = this.state.tweets;
    if (this.state.likedTweetsToggle) {
      return this.state.tweets.filter(t => t.liked);
    }
    return tweets;
  }

  render() {
    return (
      <div className="flex w-100 flex-column items-center">
        <Nav 
          toggleFunc={this.toggleSwitch} 
          toggleState={this.state.likedTweetsToggle} 
          likes={this.state.likes} 
          clearFunc={this.clearButtonPressedHandler}
        />
        <div className='tweetContainer'>
          <TweetsList tweets={this.shownTweets()} likeHandler={this.tweetLikeHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
