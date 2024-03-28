import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css'

const TodoForm = ({onClick, onChange, inputValue, isDisabled}) => {
    return (
        <form className={styles.form}>
            <div className={styles.formFiled}> 
             <input type="text" value={inputValue} onChange={onChange} className={styles.input} placeholder="Enter new todo"/>
            </div>
           <Button onClick={onClick} isDisabled={isDisabled}/>
        </form>
    )
}

export default TodoForm;