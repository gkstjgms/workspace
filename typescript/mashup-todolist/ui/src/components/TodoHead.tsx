import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
    color: #868e96;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: #2050c9;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

function TodoHead() {
  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const users = useSelector((state: RootState) => state.user);

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <TodoHeadBlock>
      <p>{users.userInfo.userid}</p>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
    </TodoHeadBlock>
  );
}

export default TodoHead;
