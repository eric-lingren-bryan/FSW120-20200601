import React, {useState} from 'react';

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        User Name:
        <input 
          type='text'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        Password:
        <input 
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Login </button>
      </form>
    </div>
  );
}

export default Login
