/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import classes from './chatWindow.module.scss';

const ChatWindow = ({ socket, id }) => {
  const [name, setName] = useState('anonymous');
  const [loading, setLoading] = useState(true);

  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.startsWith('/')) {
      const data = message.split(' ');

      if (data[0] === '/setname') {
        setName(data[1]);
      }

      setMessage('');

      return;
    }

    socket.emit('message', { message, sender: name }, id);
    setMessage('');
  };

  useEffect(() => {
    socket.on('receive-message', (msg) => {
      setMessages([...messages, msg]);
    });

    if (!loading) {
      localStorage.setItem(id, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const data = localStorage.getItem(id);

    if (data) {
      setMessages(JSON.parse(data));
      setLoading(false);
    }
  }, []);

  return (
    <div className={classes.chat}>
      <h1>Chats</h1>
      <div className={classes.chatbox}>
        {React.Children.toArray(
          messages.map((msg, i) => (
            <div
              className={classes.messageContainer}
              style={{
                marginLeft: msg.sender === name ? 'auto' : '0px',
                textAlign: msg.sender === name ? 'right' : 'left',
              }}
            >
              {i > 0 && msg.sender === messages[i - 1].sender ? null : (
                <div className={classes.sender}>{msg.sender}</div>
              )}
              <div className={classes.message}>{msg.message}</div>
            </div>
          )),
        )}
      </div>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div className={classes.btnContainer}>
          <input
            className={classes.input}
            name="message"
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={classes.btn}>
            <img src={require('../../../assets/send.svg')} alt="send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;
