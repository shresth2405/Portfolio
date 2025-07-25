import React from 'react';

function Help() {
  const commands = [
    { command: "identity", description: "Reveal the secret identity (spoiler: it's you 😎)" },
    { command: "about", description: "Learn more about who I am and what I do" },
    { command: "projects", description: "Display the list of my featured projects" },
    { command: "contact", description: "Ways to reach out — if you're not a bot" },
    { command: "clear", description: "Clear the terminal screen" },
    { command: "help", description: "Show this help message" },
  ];

  return (
    <div className="text-white font-genesix">
      <h2 className="text-xl font-bold mb-2">Available Commands:</h2>
      <ul className="list-none space-y-1 text-xl">
        {commands.map((cmd, index) => (
          <li key={index}>
            <span className="text-yellow-300">$ {cmd.command}</span> — {cmd.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Help;
