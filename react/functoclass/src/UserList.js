import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { user, onRemove, onToggle } = this.props;
    return (
      <div>
        <b
          style={{
            cursor: "pointer",
          }}
          onClick={onToggle}
        >
          username
        </b>
        &nbsp;
        <span>useremail</span>
        &nbsp;
        <button onClick={onRemove}>삭제</button>
      </div> 
    );
  }
}

/*
function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      &nbsp;
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
*/

export default UserList;
