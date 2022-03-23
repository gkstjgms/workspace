import React, { Component } from "react";

class UserList extends Component {
  render() {
    const { user, onRemove, onToggle } = this.props;

    return (
      <div>
        <b
          style={{
            cursor: "pointer",
            color: user.active ? "green" : "black",
          }}
          onClick={() => onToggle(user.id)}
        >
          {user.username}
        </b>
        &nbsp;
        <span>({user.email})</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
        {users.map((user) => (
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
}

export default UserList;
