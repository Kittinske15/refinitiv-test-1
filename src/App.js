import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0)
  const [selectedValue, setSelectedValue] = useState('isPrime')
  const [result, setResult] = useState(null)
  const [items, setItems] = useState([
    {
      label: 'isPrime',
      value: 'isPrime'
    },
    {
      label: 'IsFibonacci',
      value: 'IsFibonacci'
    }
  ])

  const calculate = (value) => {
    if (value < 0) return 1
    else return Math.round(value)
  }

  const isPrime = (num) => {
    if (num == 1 || num == 0) {
      return false
    } else if (num === 2) {
      return true
    } else {
      for (var x = 2; x < num; x++) {
        if (num % x === 0) {
          return false
        }
      }
      return true
    }
  }

  const isFibonacci = (num, count = 1, last = 0) => {
    if (count < num) {
      return isFibonacci(num, count + last, count)
    }
    else if (count === num) {
      return true
    }
    else if (num === 0) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (selectedValue === 'isPrime') {
      setResult(isPrime(value))
    } else {
      setResult(isFibonacci(value))
    }
  }, [selectedValue, value])

  return (
    <div className="grid-container">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            setValue(calculate(e.target.value))
          }
        }}
      />
      <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div>{result === true ? <>true</> : <>false</>}</div>
    </div>
  )
}

export default App
