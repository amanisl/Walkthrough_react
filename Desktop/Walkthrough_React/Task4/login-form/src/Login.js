import React from 'react';

class Login extends React.Component {
  render() {
    return React.createElement(
      'form',
      { action: '#', method: 'POST' },
      React.createElement('input', { type: 'text', name: 'username', placeholder: 'username' }),
      React.createElement('input', { type: 'password', name: 'password', placeholder: 'password' }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    );
  }
}

export default Login;
