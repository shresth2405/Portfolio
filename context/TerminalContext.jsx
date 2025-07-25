// context/TerminalContext.jsx
"use client";
import { createContext, useContext, useState } from "react";
import Project from "@/components/Project";
import About from "@/components/About";
import { comma } from "postcss/lib/list";
import Resume from "@/components/Resume";
import Help from "@/components/Help";
import Clear from "@/components/Clear";
import Contact from "@/components/Contact";


const TerminalContext = createContext();

export const TerminalProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [activePage, setActivePage] = useState("");
  const [history, setHistory] = useState([]);
  const [sending, setSending] = useState(false);


  const executeCommand = (command) => {
    let output;
    command = command.toLowerCase();

    if (sending) {
      setHistory((prev) => [...prev, { command, output: "⚠️ Message is being sent. Please wait..." }]);
      return;
    }
    if (command === "identity") {
      setActivePage("identity");
      output = <About />
      // history.push({command:"about", output:<About/>})
    }

    else if (command === "projects") {
      setActivePage("projects");
      output = <Project />
      // history.push({command:"project", output:<Project/>})
    }
    else if (command === "resume") {
      setActivePage("projects");
      output = <Resume />
    }
    else if (command === "help") {
      setActivePage("help");
      output = <Help />
    }
    else if (command === "clear") {
      setActivePage("clear");
      output = <Clear />
    }
    else if (command === "contact") {
      setSending(true);
      setActivePage("contact");
      output = <Contact />
    }
    else {
      setActivePage(""); // Default case4
      output = <p className="text-red-500 font-genesix">Command not found: {command}</p>;
    }

    setHistory((prev) => [...prev, { command, output }]);

  };

  return (
    <TerminalContext.Provider
      value={{ input, setInput, sending, setSending, history, setHistory, activePage, executeCommand }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminal = () => useContext(TerminalContext);
