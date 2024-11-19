import { useState, useEffect } from 'react';
import { DEV_CONFIG } from '../../config/development';

const DevTools = () => {
  const [showGrid, setShowGrid] = useState(DEV_CONFIG.FEATURES.SHOW_GRID);
  const [showOutlines, setShowOutlines] = useState(DEV_CONFIG.FEATURES.SHOW_OUTLINES);

  useEffect(() => {
    const handleKeyPress = (e) => {
      const { KEYBOARD_SHORTCUTS } = DEV_CONFIG.TOOLS;
      
      switch (e.key) {
        case KEYBOARD_SHORTCUTS.TOGGLE_GRID:
          setShowGrid(prev => !prev);
          break;
        case KEYBOARD_SHORTCUTS.TOGGLE_OUTLINES:
          setShowOutlines(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  return (
    <>
      {showGrid && <div className="dev-grid" />}
      {showOutlines && <style>{`* { outline: 1px solid rgba(255,0,0,0.2) !important; }`}</style>}
    </>
  );
};

export default DevTools; 