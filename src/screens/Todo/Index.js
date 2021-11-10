import * as React from "react";
import styles from "./style.module.css";
import { List } from "../../App";

export default function ToDoList() {
  const { list, currentInputValue, set } = List.tap();
  const savedToDoList =
    JSON.parse(localStorage.getItem("todos")) !== null
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

  const save = (e) => {
    e.preventDefault();
    if (list.includes(currentInputValue)) {
      return null;
    } else {
      set.list = [...list, currentInputValue];
      localStorage.setItem(
        "todos",
        JSON.stringify([...list, currentInputValue])
      );
    }
  };
  React.useEffect(() => {
    return savedToDoList !== null
      ? (set.list = savedToDoList)
      : (set.list = []);
  }, []);
  return (
    <div>
      <div className={styles.todoContainer}>
        {list.map((item, index) => {
          return <ToDoItem value={item} key={index} />;
        })}
      </div>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => {
            set.currentInputValue = e.target.value;
          }}
          name={"newToDo"}
          value={currentInputValue}
        />
        <button
          onClick={(e) => {
            save(e);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
const ToDoItem = (props) => {
  const { removeValue } = List.tap();
  return (
    <span>
      <input
        onClick={() => {
          removeValue(props.value);
        }}
        type={"checkbox"}
      />
      <span>{props.value}</span>
    </span>
  );
};
