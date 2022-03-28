import React, { Component } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        username: "",
        email: "",
      },
      users: [
        {
          id: 1,
          username: "velopert",
          email: "public.velopert@gmail.com",
          active: true,
        },
        {
          id: 2,
          username: "tester",
          email: "tester@example.com",
          active: false,
        },
        {
          id: 3,
          username: "liz",
          email: "liz@example.com",
          active: false,
        },
      ],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  id = 4;
  handleCreate = () => {
    const { username, email, users } = this.state;

    const user = {
      id: this.id,
      username,
      email,
    };

    this.setState({
      users: users.concat(user),
      username: '',
      email: ''
    });

    this.id += 1;
  };

  handleRemove = (id) =>  {
    const { users } = this.state;

    this.setState({
      users: users.filter((user) => user.id !== id),
    });
  };

  handleToggle = (id) => {
    const { users } = this.state;

    this.setState({
      users: users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      ),
    });
  };

  render() {
    const { username, email, users } = this.state;

    return (
      <div>
        <CreateUser
          username={username}
          email={email}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
        />
        <br />
        <UserList
          users={users}
          onRemove={this.handleRemove}
          onToggle={this.handleToggle}
        />
        <br />
        <div>활성사용자 수 : {countActiveUsers(users)}</div>
      </div>
    );
  }
}

export default App;
