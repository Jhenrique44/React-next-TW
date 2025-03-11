/* eslint-disable react/prop-types */
import styles from './Tweet.module.css'
export default function Tweet( {tweet}) {
  return (
    <div className={styles.tweetContainer}>
      <img src={tweet.user.picture}/>
      <div >
        <span className={styles.userName}>{tweet.user.name}</span>
        <span className={styles.userUserName}>{tweet.user.username}</span>
        <span className={styles.date}>{tweet.date}</span>
      </div>
      <div className={styles.tweetText}>
        {tweet.children}
      </div>
    </div>
  )
}