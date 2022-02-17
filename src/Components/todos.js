import React, { useRef, useState } from "react";

function Todos() {
  let todoList = [
    {
      id: 1,
      title: "todo1",
      completed: false,
    },
    {
      id: 2,
      title: "todo2",
      completed: false,
    },
    {
      id: 3,
      title: "todo3",
      completed: false,
    },
  ];

  const itemStyle = {
    color: "yellow,",
    padding: "5px",
  };

  const [todos, setTodos] = useState(todoList);
  const [selectedTodo, setselectedTodo] = useState(null);
  const addTodo = () => {
    console.log("ref", inputRef.current.value);
    let newTodo = {
      id: Math.round(Math.random()) * 100,
      title: inputRef.current.value,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    console.log("todoList", todoList);
  };

  const updateTodo = () => {
    todos.map((item) => {
      item.id == selectedTodo.id
        ? (item.title = inputRef.current.value)
        : (item = { ...selectedTodo });
    });
    setTodos([...todos]);
    inputRef.current.value = "";
  };
  const inputRef = useRef("");

  const deleteTodo = (id) => {
    alert("id = " + id);
    setTodos(todos.filter((x) => x.id !== id));
    inputRef.current.value = "";
  };
  //let selectedTodo=null;
  const editTodo = (item) => {
    inputRef.current.value = item.title;
    setselectedTodo({ ...item });
    console.log("selectedTodo", selectedTodo);
  };

  const canselTodo = (item) => {
    inputRef.current.value = "";
  };
  return (
    <div style={{ padding: "15px", backgroundColor: "Red" }}>
      <input ref={inputRef} type="text" placeholder="new todo" />
      {selectedTodo && (
        <>
          {""}
          <button onClick={updateTodo}>Update</button>
          <button onClick={() => canselTodo()}>Cansel</button>
        </>
      )}
      {selectedTodo && <button onClick={addTodo}>Ekle</button>}

      {todos.map((item, key) => {
        return (
          <div style={itemStyle} key={key}>
            {item.title} - {item.completed ? "tamamlandı" : "tamamlanmadı"}{" "}
            <button onClick={() => deleteTodo(item.id)}>Sil</button>
            <button onClick={() => editTodo(item)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
