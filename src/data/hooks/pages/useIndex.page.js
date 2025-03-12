import { useState } from "react";
export function useIndex() {
  
const [text, setText] = useState('');
  const maxLength = 125;
  const [tweetList, setTweetList] = useState([])

  const tweet = {
    date: new Date(),
    text: text,
    user: {
      date: new Date().toDateString(),
      text: text,
      user: {
        name: 'Username',
        username: '@username',
        picture: 'https://github.com/Jhenrique44.png'
      }
    }
  }
  function onTextChange(event) {
    const text = event.targetvalue
    if (text.length <= maxLength) {
      setText(text);
    }
  }
  function sendTweet() {
    setTweetList([...tweetList, tweet])
  }
  return  {
    text,
    maxLength,
    onTextChange,
    sendTweet,
    tweetList
  }

}