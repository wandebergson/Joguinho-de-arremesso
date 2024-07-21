import { useEffect, useState } from 'react';

export const useControls = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleKeyDown = (e: KeyboardEvent) => {
    setPosition(prevPosition => {
      switch (e.key) {
        case 'ArrowUp':
          return { x: prevPosition.x, y: prevPosition.y - 10 };
        case 'ArrowDown':
          return { x: prevPosition.x, y: prevPosition.y + 10 };
        case 'ArrowLeft':
          return { x: prevPosition.x - 10, y: prevPosition.y };
        case 'ArrowRight':
          return { x: prevPosition.x + 10, y: prevPosition.y };
        default:
          return prevPosition;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return position;
};
export default useControls;