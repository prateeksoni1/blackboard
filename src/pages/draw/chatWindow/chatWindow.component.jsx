/* eslint-disable global-require */
import React from 'react';
import classes from './chatWindow.module.scss';

// eslint-disable-next-line arrow-body-style
const ChatWindow = () => {
  return (
    <div className={classes.chat}>
      <h1>Chats</h1>
      <div className={classes.chatbox}>chats go here</div>
      <div className={classes.btnContainer}>
        <input
          className={classes.input}
          name="message"
          type="text"
          placeholder="Type your message..."
        />
        <button type="submit" className={classes.btn}>
          <img src={require('../../../assets/send.svg')} alt="send" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
