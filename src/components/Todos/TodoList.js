import { useState } from "react"
import ItemList from "./ItemList"
import styles from "./TodoList.module.css"

const TodoList = ({dataList, ondblClickRemove, completedTodo, setCompletedhandler, deleteItemHandler}) => {
    // const [completedTodo, setCompletedTodo] = useState([]);

    // const setCompletedhandler = (item) => {
    //     const isExist = !!completedTodo.find((_) => _.id === item.id);
    //     if (isExist) {
    //         setCompletedTodo([...completedTodo.filter((_)=> _.id !== item.id)])
    //     }
    //     else {
    //         setCompletedTodo([...completedTodo, item]);
    //     }
       
    // }
    return (
        <>
            <div className= {styles.todoListContainer}>
                {dataList && dataList?.length ? 
                dataList.map((item, idx) => {
                    return <ItemList item={item} key={idx} isSelected={completedTodo.find((_ => _.id === item.id)) } deleteItemHandler={deleteItemHandler} setCompletedHandler={setCompletedhandler} ondblClickRemove={ondblClickRemove}/>}) 
                : <div>Emplty list</div>}
            </div>
            {!!completedTodo?.length && <h3>You have complteted {completedTodo?.length}  todo!</h3>}
        </>
    )
}

export default TodoList