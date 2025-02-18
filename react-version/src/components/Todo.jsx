import { useEffect, useRef, useState } from "react";
import Tile from "./tile";
import icon from "/src/assets/icon.jpg";
const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodoList((prevtoDo) => {
      return prevtoDo.filter((Todo) => Todo.id !== id);
    });
  };
  const Switch = (id) => {
    setTodoList((prevtoDo) => {
      return prevtoDo.map((Todo) => {
        if (Todo.id === id) {
          return { ...Todo, isComplete: !Todo.isComplete };
        }
        return Todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={icon} />
        <h1 className="text-3xl font-semibold">To do list </h1>
      </div>

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="ADD YOUR TASK"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD
        </button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <Tile
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              Switch={Switch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
