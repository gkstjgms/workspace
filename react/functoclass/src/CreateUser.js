import React, { Component } from "react";

class CreateUser extends Component {
  render() {
    const { username, email, onChange, onCreate } = this.props;

    return (
      <div>
        <input name="username" placeholder="계정명" onChange={onChange} value={username} />
        &nbsp;
        <input name="email" placeholder="이메일" onChange={onChange} value={email} />
        &nbsp;
        <button onClick={onCreate}>등록</button>
      </div>
    );
  }
}

export default CreateUser;
