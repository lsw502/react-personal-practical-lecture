import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  const [signUpClicked, setSignUpClicked] = useState(false);
  return (
    <>
      <StWrapper>
        <form>
          <span>로그인</span>
          <input type="id" placeholder="아이디 (4~10글자)"></input>
          <input type="password" placeholder="비밀번호(4~15글자)"></input>

          <button type="submit">로그인</button>

          <button type="button">회원가입</button>
        </form>
      </StWrapper>

      <StContainer>
        <form>
          <span>회원가입</span>
          <input type="id" placeholder="아이디 (4~10글자)"></input>
          <input type="password" placeholder="비밀번호(4~15글자)"></input>
          <input type="nickname" placeholder="닉네임(1~10글자)"></input>

          <button type="submit">회원가입</button>

          <button type="button">로그인</button>
        </form>
      </StContainer>
    </>
  );
}

export default Login;

const StWrapper = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #c5c1c1;
  span {
    margin: 5px;
    width: 100%;
    font-weight: bold;
    font-size: 30px;
  }
  form {
    background-color: white;
    margin: auto;
    width: 400px;
    height: 300px;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: #c5c1c1;
  span {
    margin: 5px;

    font-weight: bold;
    font-size: 30px;
    width: 100%;
  }
  form {
    background-color: white;
    margin: auto;
    width: 400px;
    height: 300px;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
