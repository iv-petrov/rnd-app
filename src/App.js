import { useState } from 'react';
import './App.css';
import MyInput from './Components/MyInput';

function App() {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(100)
  const [rndValue, setRndValue] = useState(0)
 
  const generateRnd = function() {
    if (minValue.length === 0) {
      alert("Введено пустое минимальное значение")
      setMinValue(0)
    }
    if (maxValue.length === 0) {
      alert("Введено пустое максимальное значение")
      setMaxValue(Math.floor(minValue) + 1)
    }
    if (minValue >= maxValue) {
      alert("Минимальное значение должно быть меньше максимального")
      setMinValue(maxValue - 1)
    }
    setRndValue(Math.floor(Math.random() * (maxValue - minValue + 1)) + Math.floor(minValue))
    return
  }
  
  return (
    <div className="App">
      <h1 className="App-header">Генератор случайных чисел</h1>
      <MyInput labelTxt='Минимальное  значение:' input={minValue} change={(e) => setMinValue(e.target.value)} />
      <MyInput labelTxt='Максимальное значение:' input={maxValue} change={(e) => setMaxValue(e.target.value)} />
      <div>
        <button onClick={generateRnd}> Генерировать </button>  случайное число {rndValue}
      </div>
   </div>
  );
}

export default App;
