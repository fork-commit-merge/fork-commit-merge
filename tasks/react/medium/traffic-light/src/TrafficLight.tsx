// React.js - Medium 2
import { useEffect, useState } from "react";
import "./App.css";

const cn = (...classNames: (string | false | undefined)[]) => classNames.filter(c => !!c).join(' ')

interface LightItem {
  color: 'red' | 'green' | 'yellow'
  time: number
}

const SEQUENCE = [
  { color: 'red', time: 4000 },
  { color: 'green', time: 3000 },
  { color: 'yellow', time: 1000 },
] as const satisfies LightItem[]

export function TrafficLight() {
  const [activeSequenceItemIndex, setActiveSequenceItemIndex] = useState<number>(0)
  const activeLight = SEQUENCE[activeSequenceItemIndex]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setActiveSequenceItemIndex((prevIndex) => (prevIndex + 1) % SEQUENCE.length)
    }, activeLight.time)

    return () => clearTimeout(timerId)
  }, [activeSequenceItemIndex, activeLight.time])

  return (
    <div className="traffic-light">
      <div className={cn('light red', activeLight.color === 'red' && 'active')} />
      <div className={cn('light yellow', activeLight.color === 'yellow' && 'active')} />
      <div className={cn('light green', activeLight.color === 'green' && 'active')} />
    </div>
  );
}
