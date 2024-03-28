import { useState } from 'react'
import styles from './Todo.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Actions from './Actions'

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const actionsNames = ['refresh', 'delete', 'pidar'];
    const [completedTodo, setCompletedTodo] = useState([]);

    const onClick = (event) => {
        event.preventDefault();
        const newValue = {
            id: Math.floor(Math.random() * 1001), 
            text: inputValue
        }
        setData([...data, newValue]);
        setInputValue('');
        setIsDisabled(true);
    }

    const onChange = (event) => {
    const value = event.target.value;
        setInputValue(value);
        event.target.value?.length ? setIsDisabled(false) : setIsDisabled(true)
    }
    const ondblClickRemove = (id) => {
        const filteredArray = data.filter(item => item.id !== id);
        setData([...filteredArray]);
        setCompletedTodo([...completedTodo.filter((item) => item.id !== id)])
    }

    const clearAllData = () => {
        setData([]);
        setCompletedTodo([])
    }

    const setCompletedhandler = (item) => {
        const isExist = !!completedTodo.find((_) => _.id === item.id);
        if (isExist) {
            setCompletedTodo([...completedTodo.filter((_)=> _.id !== item.id)])
        }
        else {
            setCompletedTodo([...completedTodo, item]);
        }
       
    }

    const deleteItemHandler = (id) => {
        setData([...data.filter((item) => item.id !== id)]);
        setCompletedTodo([...completedTodo.filter((item) => item.id !== id)])
    }

    const deleteCompletedTodos = () => {
        const dataMap = new Map();
        data.forEach((item) => {
            dataMap.set(item.id, item)
        });
        
        completedTodo.forEach((el) => {
            if(dataMap.has(el.id)) {
                dataMap.delete(el.id);
            }
        })
        setData([...Array.from(dataMap).map(([key, value])=> value)]);
        setCompletedTodo([]);
    }
return (
<div className={styles.container}>
    <h1 className={styles.h1}>Todo App</h1>
    <TodoForm onClick={onClick} inputValue={inputValue} onChange={onChange} isDisabled={isDisabled}/>
    {!!data && !!data?.length  && <Actions iconsNames={actionsNames} completedTodo={completedTodo} deleteCompletedTodos={deleteCompletedTodos} clearAllData={clearAllData}/>}
    <TodoList dataList={data} deleteItemHandler={deleteItemHandler} setCompletedhandler={setCompletedhandler} completedTodo={completedTodo} ondblClickRemove={ondblClickRemove}/>
</div>)
}


export default Todo