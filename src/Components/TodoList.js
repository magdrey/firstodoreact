import Todo from "./Todo"
import styles from "../style.module.css"


const TodoList = ({todoList, setTodoList, todoItem}) => {
    return (
        <div className={styles.tocon} >
          {todoList.map((todoItem) => (
              <Todo key={todoItem.id} todoItem={todoItem}
              todoList={todoList} setTodoList={setTodoList}></Todo>
          ))} 
        </div> 
    )
}
export default TodoList