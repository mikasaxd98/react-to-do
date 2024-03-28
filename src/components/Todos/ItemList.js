import { RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styles from './ItemList.module.css'

const ItemList = ({item, ondblClickRemove, setCompletedHandler, isSelected, deleteItemHandler}) => {
    return (
    <div className={`${styles.item} ${isSelected && styles.selected}`} onDoubleClick={() => ondblClickRemove(item.id)}>
            <div className={styles.icon}>
              <RiTodoFill className={styles.todoIcon}/>
            </div>
            <div className={styles.text}>{item?.text}</div>
            <div className={styles.actionsContainer}>
              <RiDeleteBin2Fill className={styles.deleteIcon} onClick={() => {deleteItemHandler(item.id)}}/>
              <FaCheck className={styles.successIcon} onClick={() => setCompletedHandler(item)}/>
            </div>
            
    </div>)
}


export default ItemList;