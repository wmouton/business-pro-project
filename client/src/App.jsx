import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* <h1 class='text-3xl font-bold underline'>Hello world!</h1> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Business Pro!</h2>
        <p>
          Professional business advice at your disposal!
        </p>
      </header>
    </div>
  );
}

export default App;
