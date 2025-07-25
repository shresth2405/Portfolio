import React, { useEffect } from 'react';
import { useTerminal } from '@/context/TerminalContext';

function Clear() {
  const { setHistory } = useTerminal();

  useEffect(() => {
    setHistory([]);
  }, [setHistory]);

  return null; // No UI to render
}

export default Clear;