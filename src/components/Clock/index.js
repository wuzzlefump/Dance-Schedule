import * as React from 'react'
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
 
export default function MyClock() {
  const [value, setValue] = React.useState(new Date());
 
  React.useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
      <Clock size={50} value={value} />
  )
}