import { useState, useEffect, useRef } from 'react';

const withMousePosition = (WrappedComponent) => (props) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMousePositionChange);

    return () => {
      window.removeEventListener('mousemove', handleMousePositionChange);
    };
  }, []);

  return <WrappedComponent {...props} mousePosition={mousePosition} />;
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div>
      <h2>PanelMouseLogger</h2>
      <div>x: {mousePosition.x}</div>
      <div>y: {mousePosition.y}</div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }

  return (
    <div>
      <h2>PointMouseLogger</h2>
      <div>x: {mousePosition.x}</div>
      <div>y: {mousePosition.y}</div>
    </div>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>HOC-basics</h1>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}
