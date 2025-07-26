import React from 'react';

function Help() {
  const commands = [
    { command: "identity", description: "Reveal the identity" },
    { command: "projects", description: "Display the list of featured projects" },
    { command: "contact", description: "Ways to reach out — if you're not a bot" },
    { command: "clear", description: "Clear the terminal screen" },
    { command: "resume", description: "Get my resume" },
    { command: "help", description: "Show this help message" },
  ];

  return (
    <div className=" font-genesix text-[8px] md:text-xl lg:text-2xl font-light text-[#D2B301]">
      <h2 className="mb-2 ">Available Commands:</h2>
      <ul className="list-none space-y-1 text-gray-400 ">
        {commands.map((cmd, index) => (
          <li key={index}>
            <span className="text-[#D2B301]">$ {cmd.command}</span> — {cmd.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Help;
