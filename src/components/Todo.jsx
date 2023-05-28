import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodoList, deleteAllTodoList } from "../store/todoSlice";
import TodoRender from "./TodoList";

const TodoList = () => {
  const [todoTitle, setTodo] = useState({
    title: "",
  });
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const todoChangeHandler = (e) => {
    const todoList = {
      title: e.target.value,
      id: Date.now().toString(),
    };
    setTodo(todoList);
    setDisabled(todoTitle.title.includes(""));
  };

  const addTodo = () => {
    dispatch(addTodoList(todoTitle));
    setTodo({
      title: "",
    });
  };
  const deleteAllTodo = () => {
    dispatch(deleteAllTodoList());
  };
  return (
    <DivStyle>
      <ToDoListStyle>
        <Input
          value={todoTitle.title}
          type="text"
          placeholder="enter..."
          onChange={(e) => todoChangeHandler(e)}
        />
        <button onClick={addTodo} disabled={!disabled}>
          ADD
        </button>
        <button onClick={deleteAllTodo}>DELETE ALL</button>
      </ToDoListStyle>
      <TodoRender />
    </DivStyle>
  );
};

export default TodoList;

const ToDoListStyle = styled.div`
  width: 600px;
  height: 70px;
  background-color: #b3aea8;
  opacity: 0.7;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  input {
    margin-left: 30px;
    border-style: none;
    height: 40px;
    border-radius: 7px;
    font-size: 0.9rem;
    width: 65%;
    :hover {
      background-color: #262f3a;
      color: whitesmoke;
    }
  }
  button {
    background-color: #060602;
    border-style: none;
    color: antiquewhite;
    height: 40px;
    border-radius: 5px;
    margin-left: 10px;
    :hover {
      background-color: #fff ;
      color: black;
    }
  }
`;
const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Input = styled.input`
  background-color: #b3aea8;
  border: none;
  font-size: 20px;


`