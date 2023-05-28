import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { authActions } from "../store/authSlice";

const Header = () => {
  const { isFormValid } = useSelector((state) => state.loginForm);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };
  return (
    <HeaderStyle>
      <p>Joker</p>
      <button onClick={logOutHandler} disabled={!isFormValid}>
        Log Out
      </button>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: #0d353f;
  opacity: 0.7;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #fefaf1;
  p {
    margin-left: 30px;
    color: red;
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 50px;
  }
  button {
    margin-right: 30px;
    background-color: #7F2810;
    border-style: none;
    color: #fefaf1;
    height: 40px;
    border-radius: 5px;
    margin-left: 20px;
    width: 100px;
    font-size: 20px;
    :hover {
      background-color: #Ffff;
      color: black;
      margin-top: -3px;
      box-shadow: 3px 13px 10px 0px rgba(34, 60, 80, 0.2);
    }
  }
`;
