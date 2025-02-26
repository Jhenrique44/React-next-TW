import styles from './TextInput.module.css';
// eslint-disable-next-line react/prop-types
export default function TextInput(props) {  
  
  return (
    <div>
      <textarea
        className={styles.input}
        {...props}
      />
    </div>
  );
}