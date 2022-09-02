import styles from "../style.module.css"
import shortid from 'shortid'
const Form = ({todo,setTodo,todoList,setTodoList}) => {

    const handlechange= (event) => {
        setTodo(event.target.value);
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([{name:todo, id:shortid.generate() },  ...todoList ]);
        console.log(todoList);
        setTodo("");
    };
    return (
        <div className={styles.todoform}>
       <form onSubmit={handleSubmit}>
           <input
            value={todo} 
            onChange={handlechange}
            className={styles.addinput} placeholder="Add Todo Item"></input><br></br>
           <button type="submit" className={styles.addbtnin}>Add Todo</button>
       </form>
        </div>
    )
}
export default Form;