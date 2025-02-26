import TextInput from "../components/TextInput";
import { useState } from "react";
export default function Index() {
  const [text, setText] = useState('');
  const maxLength = 125;
  const [tweetList, setTweetList] = useState([])

  function sendTweet() {
    setTweetList([...tweetList, text])
  }
  function onTextChange(event) {
    const text = event.targetvalue
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  return (
    <div className="">
      <h1> TreinaTweet </h1>
      <div>
        <img src={'https://avatars.githubusercontent.com/u/70330647?s=400&u=fa0cd2fe2a312d17e56039aab5a544bea1d45f1b&v=4'} />
        <TextInput
        placeholder={'O que está acontecend?'}
        maxLength={maxLength}
        value={text}
        onChange={onTextChange}
        ></TextInput>
      </div>
      <div className="">
        <div className="">{text.length} / {maxLength} </div>
        <button onClick={sendTweet}>Tweetar</button>
      </div>
      <ul>
        {tweetList.map(tweet => {
          return (
            <li key={tweet}>{tweet}</li>
          )
        })}
      </ul>
    </div>
  )
}