import * as React from "react";
import styles from "./style.module.css";
import { Provider } from "@expressive/mvc";
import { List } from "./controller";

export default function ToDoList() {
  const { list, currentInputValue, set } = List.use();
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
    <Provider of={List} list={list} currentInputValue={currentInputValue}>
      <div>
        <div className={styles.todoContainer}>
          {list.map((item, index) => {
            return (
              <span>
                <input
                  onFocus={() => {
                    let x = list;
                    x.pop(item);
                    set.list = [...x];
                    localStorage.setItem("todos", JSON.stringify([...x]));
                  }}
                  type={"checkbox"}
                />
                <span>{item}</span>
              </span>
            );
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
    </Provider>
  );
}
