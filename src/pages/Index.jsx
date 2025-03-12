import TextInput from "../components/TextInput";
import { useIndex } from "../data/hooks/pages/useIndex.page";
import styles from "./Index.module.css";
import Tweet from "../components/Tweet";
export default function Index() {
  const {
    text,
    maxLength,
    onTextChange,
    sendTweet,
    tweetList
  } = useIndex();
  return (
    <div className="">
      <h1 className={styles.pageTitle}> TreinaTweet </h1>
      <div className={styles.tweetContainer}>
        <img
          src={'https://github.com/Jhenrique44.png'}
          className={styles.avatar} />
        <TextInput
          placeholder={'O que está acontecend?'}
          maxLength={maxLength}
          value={text}
          rows={3}
          onChange={onTextChange}
        ></TextInput>
      </div>
      <div className={styles.buttonContainer}>
        <div>{text.length} / {maxLength} </div>
        <button
          onClick={sendTweet}
          className={styles.postButton}
          disabled={text.length === 0}
        >Tweetar</button>
      </div>
      <ul className={styles.tweetList}>
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