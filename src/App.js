import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.userName}
          name="userName"
          placeHolder="Username"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          value={this.state.passWord}
          name="passWord"
          placeHolder="Password"
          onChange={this.handleChange}
        />
        <h1>
          {" "}
          {this.state.userName} {this.state.passWord}{" "}
        </h1>
      </form>
    );
  }
}

export default App;
