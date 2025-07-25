"use client"
import { useState, useRef, useEffect } from 'react';
import React from 'react'
import { useTerminal } from '@/context/TerminalContext';
import About from './About';
import Project from './Project';
function Command() {

    // const [response, setResponse] = useState("")
    const terminalRef = useRef(null);
    const bottomRef = useRef(null);
    // const [prevHeight, setPrevHeight] = useState(0);

    const { input, setInput, executeCommand, history, setHistory, sending } = useTerminal();

    useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;

    const isAtBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 5;

    if (isAtBottom) {
      el.scrollTop = el.scrollHeight;
    }

    // Save scroll position status for next time
    setWasAtBottom(isAtBottom);
  }, [history]);


    if (!Array.isArray(history)) {
        return <div>⚠️ history is not an array</div>;
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !sending) {
            executeCommand(input.trim());
            setInput(""); // clear input after command runs
        }
    };

    return (
        <div className="text-white min-h-screen p-4 font-mono text-2xl">
            {/* Command history */}
            {history.map((entry, index) => (
                <div key={index}>
                    <div className="flex">
                        <span className="text-yellow-300 mr-2 mb-4 font-ethnocentric">[batman@portfolio]$</span>
                        <span className='font-batman text-gray-400'>{entry.command}</span>
                    </div>
                    <div className="font-bold mb-4">{entry.output}</div>
                </div>
            ))}

            {/* Current prompt */}
            <div className="flex">
                {!sending && <span className="text-yellow-300 mr-2 font-ethnocentric">[batman@portfolio]$</span>}
                <input
                    className=" text-white border-none outline-none w-full font-batman"
                    disabled={sending}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
}

export default Command