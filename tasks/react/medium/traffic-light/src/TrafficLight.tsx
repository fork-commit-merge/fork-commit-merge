// React.js - Medium 2
import "./App.css";
import { useEffect, useState } from 'react'

// TODO: Implement  the TrafficLight component

export function TrafficLight() {
  const Status = [
    { status: 'red', timeout: 4000 },
    { status: 'green', timeout: 3000 },
    { status: 'yellow', timeout: 1000 },
  ]

  const [stateIndex, setStateIndex] = useState<number>(0)
  const currentState = Status[stateIndex]

  const updateState = () => {
    if (stateIndex < 2) {
      setStateIndex(prev => prev + 1)
      return
    }
    else
      setStateIndex(0)
  }


  // Logs a message after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      updateState()

    }, currentState.timeout);

    return () => clearTimeout(timer)

  }, [stateIndex])

  return (
    // TODO: return JSX here

    <div className="traffic-light">
      <div className={`light green ${currentState.status == 'green' ? 'active' : ''}`}  >
      </div>
      <div className={`light yellow ${currentState.status == 'yellow' ? 'active' : ''}`}  >
      </div>
      <div className={`light red ${currentState.status == 'red' ? 'active' : ''}`}  >
      </div>
    </div>

  );
}
