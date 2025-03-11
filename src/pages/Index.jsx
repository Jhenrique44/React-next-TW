import TextInput from "../components/TextInput";
import { useState } from "react";
import styles from "./Index.module.css";
import Tweet from "../components/Tweet";
export default function Index() {
  const [text, setText] = useState('');
  const maxLength = 125;
  const [tweetList, setTweetList] = useState([])
 
  const tweet = { 
    date: new Date().toDateString(),
    text:text,
    user: {
      name: 'User',
      username: '@user',
      picture: 'https://avatars.githubusercontent.com/u/70330647?s=400&u=fa0cd2fe2a312d17e56039aab5a544bea1d45f1b&v=4'
    }
  }

  function sendTweet() {
    setTweetList([...tweetList, tweet])
  }
  function onTextChange(event) {
    const text = event.targetvalue
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  return (
    <div className="">
      <h1 className={styles.pageTitle}> TreinaTweet </h1>
      <div className={styles.tweetContainer}>
        <img src={'https://avatars.githubusercontent.com/u/70330647?s=400&u=fa0cd2fe2a312d17e56039aab5a544bea1d45f1b&v=4'}
          className={styles.avatar} />
        <TextInput
          placeholder={'O que está acontecend?'}
          maxLength={maxLength}
          value={text}
          rows={3}
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
            <li key={tweet} className={styles.tweetListItem}>
              <Tweet tweet={tweet} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}