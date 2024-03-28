import { RiRefreshLine } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styles from './Actions.module.css'

const Actions = ({iconsNames, clearAllData, deleteCompletedTodos, completedTodo}) => {
    const icons = {
        refresh: <button onClick={clearAllData}><RiRefreshLine className={styles.icon}/></button>,
        delete: <button onClick={deleteCompletedTodos} disabled={!completedTodo?.length}><RiDeleteBin2Fill className={styles.icon}/></button>,
    }

    return (
    <div className={styles.actionsContainer}>
        {iconsNames && iconsNames.map((iconName, idx) => <div key={idx}>{icons[iconName]}</div>)}
    </div>
    )
}

export default Actions;