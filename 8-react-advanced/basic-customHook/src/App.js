import { useState, useEffect, useRef } from 'react';

export default function App() {
  console.log(
    '%c-> developmentConsole: App --------------------------------------> ',
    'color:#77dcfd'
  );

  const [day, setDay] = useState('Monday');

  console.log('%c-> developmentConsole: App | day= ', 'color:#77dcfd', day);

  const prevDay = usePrevious(day);

  useEffect(() => {
    console.log('%c-> developmentConsole: App | useEffect= ENTERED ', 'color:#77dcfd');
  }, []);

  console.log('%c-> developmentConsole: App | prevDay= ', 'color:#77dcfd', prevDay);

  const getNextDay = () => {
    if (day === 'Monday') {
      setDay('Tuesday');
    } else if (day === 'Tuesday') {
      setDay('Wednesday');
    } else if (day === 'Wednesday') {
      setDay('Thursday');
    } else if (day === 'Thursday') {
      setDay('Friday');
    } else if (day === 'Friday') {
      setDay('Monday');
    }
  };

  console.log('%c-> developmentConsole: App | BEFORE RETURN ', 'color:#77dcfd');

  return (
    <div style={{ padding: '40px' }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}
function usePrevious(val) {
  console.log(
    '%c-> developmentConsole: usePrevious --------------------------------------> ',
    'color:#77dcfd'
  );

  console.log('%c-> developmentConsole: usePrevious | val= ', 'color:#77dcfd', val);

  const ref = useRef();
  useEffect(() => {
    console.log(
      '%c-> developmentConsole: usePrevious | useEffect= ENTERED ',
      'color:#77dcfd'
    );

    ref.current = val;
  }, [val]);

  console.log(
    '%c-> developmentConsole: usePrevious | ref.current= ',
    'color:#77dcfd',
    ref.current
  );

  console.log('%c-> developmentConsole: usePrevious | BEFORE RETURN ', 'color:#77dcfd');

  return ref.current;
}
