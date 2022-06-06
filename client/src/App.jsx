import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
        <h2>Welcome to Business Pro!</h2>
        <p>
          Professional business advice at your disposal.
        </p>
    </div>
  );
}

export default App;
