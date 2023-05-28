import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodoList, editTodoList } from "../store/todoSlice";

const TodoRender = () => {
  const [edit, setEdit] = useState("");
  const [value, setValue] = useState("");
  // const title = useSelector((state) => state.todo);
  // console.log(value);
  // const titleToDo = title.map((e) => {
  //   return e.title;
  // });
  // const idTodo = title.map((id) => {
  //   return id.id;
  // });
  // console.log(titleToDo);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const deleteHandler = (id) => {
    dispatch(deleteTodoList(id));
  };

  const editHandler = (title, idTodo) => {
    setEdit(idTodo);
    setValue(title);
  };
  const newTodoHandler = (id, value) => {
    const idAndValue = {
      id,
      value,
    };
    dispatch(editTodoList(idAndValue));
    setEdit((prevState) => !prevState);
  };
  return (
    <DivStyle>
      <ul>
        {todo.map((elem) => (
          <StyleToDolist>
            {edit === elem.id ? (
              <>
                <InputStyle
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  value={value}
                />
                <ButtonStyle onClick={() => newTodoHandler(elem.id, value)}>
                  Add Todo
                </ButtonStyle>
              </>
            ) : (
              <>
                <DivTitle>
                  <li>{elem.title}</li>
                </DivTitle>
                <div>
                  <ButtonDelete onClick={() => deleteHandler(elem.id)}>
                    DELETE
                  </ButtonDelete>
                  <ButtonEdit onClick={() => editHandler(elem.title, elem.id)}>
                    EDIT
                  </ButtonEdit>
                </div>
              </>
            )}
          </StyleToDolist>
        ))}
      </ul>
    </DivStyle>
  );
};

export default TodoRender;

const ButtonStyle = styled.button`
  width: 100px;
  background-color: black;
  color: #fff;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    background-color: #fff;
    color: black;
  }
`;

const InputStyle = styled.input`
  border: none;
  font-size:16px;
  border-radius: 5px;

`

const DivStyle = styled.div`
  li {
    list-style: none;
    color: antiquewhite;
  }
`;

const StyleToDolist = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  width: 600px;
  border-radius: 10px;
  background-color: #b3aea8;
  opacity: 0.6;
  display: flex;
  align-items: center;
  margin-left: -40px;
  margin-top: 10px;
`;

const DivTitle = styled.div`
  width: 200px;
  height: 30px;
  /* background-color: #ed10c4; */
  text-align: left;
  padding-left: 5px;
  border-radius: 5px;
  margin-left: -5px;
`;

const ButtonDelete = styled.button`
  height: 30px;
  background-color: #ffffff;
  color: #000000;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    color: #ffffff;
    background-color: crimson;
  }
`;

const ButtonEdit = styled.button`
  height: 30px;
  background-color: #5900ff;
  color: antiquewhite;
  border-style: none;
  margin-left: 20px;
  border-radius: 5px;
  :hover {
    background-color: #5410d1;
    color: black;
    cursor: pointer;
  }
`;
