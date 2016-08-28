/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import io from 'socket.io-client';

const socket = io.connect();

function socketNewMessage({ message, user }) {
  socket.emit('new message', { message, user });
}

function socketNewUser({ user }) {
  socket.emit('new user', { user });
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined,
      users: [],
      message: '',
      messages: [],
    };
  }

  componentDidMount() {
    const { state } = this;
    socket.on('user created', ({ user }) => {
      this.setState({
        users: [...state.users, user],
      });
    });

    socket.on('message created', ({ message, user }) => {
      this.addChatMessage({ message, user });
    });
  }

  onClick() {
    this.broadcastMessage();
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.broadcastMessage();
    }
  }

  onUsernameKeyPressed(event) {
    if (event.key === 'Enter') {
      this.saveUsername();
    }
  }

  saveUsername() {
    const user = this.refs.username.value;
    this.setState({ user });
    socketNewUser({ user });
  }

  messageBoxChange() {
    this.setState({
      message: this.refs.messageBox.value,
    });
  }

  addChatMessage({ message, user }) {
    const { state } = this;
    this.setState({
      messages: [...state.messages, { message, user }],
    });
  }

  resetMsgBox() {
    this.setState({
      message: '',
    });
  }

  broadcastMessage() {
    const message = this.refs.messageBox.value;
    const user = this.state.user;
    socketNewMessage({ message, user });
    this.resetMsgBox();
  }

  render() {
    const { messages, message, user } = this.state;
    return (
      <div>
        {!user && (
          <div>
            <h3>Enter your username:</h3>
            <input ref="username" onKeyPress={::this.onUsernameKeyPressed} />
          </div>
        )}
        {user && (
          <div>
            <h1>Hi {user}</h1>
            <ul id="messages">{
              messages.map((m, i) => <li key={`m${i}`}><strong>{m.user}</strong> {m.message} </li>)
            }</ul>
            <div className="chat">
              <input
                autoComplete="off"
                onChange={::this.messageBoxChange}
                ref="messageBox"
                onKeyPress={::this.onKeyPress}
                value={message}
              />
              <button onClick={::this.onClick}>Send</button>

            </div>
          </div>
        )}
      </div>
    );
  }
}
