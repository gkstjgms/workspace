import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdLogIn } from 'react-icons/io'

const TodoHeadBlock = styled.div`
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
        text-align: center;
    }
    padding-top: 30px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e9ecef;
`;

const LoginButton = styled.button`
    background: #3866d9;
    &:hover {
        background: #6382e6;
    }
    &:active {
        background: #2050c9;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
`;

const InsertFormPositioner = styled.div`
    h2 {
      margin: 0;
      padding-left: 45px;
      padding-right: 32px;
      font-size: 30px;
      color: #343a40;
    }
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertId = styled.form`
    padding-left: 32px;
    padding-top: 15px;
    padding-right: 32px;
    padding-bottom: 70px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`;

const InsertPw = styled.form`
    padding-left: 32px;
    padding-top: 15px;
    padding-right: 32px;
    padding-bottom: 170px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoLogin() {
    return (
        <>
            <TodoHeadBlock>
                <h1>Login</h1>
            </TodoHeadBlock>
            <InsertFormPositioner>
                <h2>Id</h2>
                <InsertId>
                    <Input placeholder="Id"></Input>
                </InsertId>
                <h2>Password</h2>
                <InsertPw>
                    <Input placeholder="Password"></Input>
                </InsertPw>
            </InsertFormPositioner>
            <LoginButton>
                <IoMdLogIn />
            </LoginButton>
        </>
    );
}

export default React.memo(TodoLogin);
