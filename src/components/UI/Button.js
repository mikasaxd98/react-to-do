import styles from './Button.module.css'

const Button = ({onClick, isDisabled}) => {
    return (<button type="submit" onClick={onClick} disabled={isDisabled} className={styles.button}>Submit</button>)
}

export default Button;