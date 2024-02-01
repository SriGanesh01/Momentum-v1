import React, { useState } from 'react';
import './Login.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      console.log('Please fill in all details.');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  return (
    <div className="App">
      <div>
        <h1 className="text-3xl font-bold underline">TORQUE</h1>

        <form className='flex flex-col items-center mt-4' onSubmit={handleLogin}>
          <input
            className={`border-2 border-dashed text-black ${name ? 'border-grey-300' : 'border-red-400'} p-2 mt-2.5`}
            type="text"
            name="Name"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={`border-2 border-dashed text-black ${isEmailValid ? 'border-grey-300' : 'border-red-400'} p-2 mt-2.5`}
            type="email"
            name="Email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='relative'>
            <input
              className={`border-2 border-dashed text-black ${password ? 'border-grey-300' : 'border-red-400'} p-2 mt-2.5`}
              type={showPassword ? 'text' : 'password'}
              name="Password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className='relative pr-5 mb-5 top-2 flex justify-center'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" disabled={!isEmailValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
