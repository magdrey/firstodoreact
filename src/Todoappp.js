import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
//import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import Todofooter from "./Components/Todofooter";
import styles from "./style.module.css";

function Todoappp() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className={styles.todoocontt}>
      <div className={styles.app}>
        <Header />
        <Form
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        ></Form>
        <div className={styles.talon}>
          <TodoList todoList={todoList} setTodoList={setTodoList} />{" "}
        </div>
       
      </div>
      <div className={styles.fooottt}>
      <Todofooter />
      </div>
    </div>
  );
}

export default Todoappp;
