import { useState } from 'react';
import './App.css';
import MyInput from './Components/MyInput';

function App() {
  const [xMin, setxMin] = useState(0)
  const [xMax, setxMax] = useState(100)
  const [xRnd, setXrnd] = useState(0)

  const generateRnd = function() {
    return setXrnd(Math.floor(Math.random() * (xMax - xMin + 1)) + Math.floor(xMin))
  }
  
  return (
    <div className="App">
      <h1 className="App-header">Генератор случайных чисел</h1>
      <MyInput labelTxt='Минимальное  значение:' input={xMin} change={(e) => setxMin(e.target.value)} />
      <MyInput labelTxt='Максимальное значение:' input={xMax} change={(e) => setxMax(e.target.value)} />
      <div>
        <button onClick={generateRnd}> Генерировать </button>  случайное число {xRnd}
      </div>
   </div>
  );
}

export default App;
