"use client";
import { useState } from "react";
import { useTerminal } from "@/context/TerminalContext";

function Contact() {
  const { setSending, setHistory, sending } = useTerminal();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkip = ()=>{
    setSending(false);
    setStatus("Disabled");
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully....I'll get back to you....!");
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Send error:", error);
      setStatus("❌ An error occurred.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-400 font-genesix font-light">
      <div className="flex">
        <label>Name: </label>
        <input
          name="name"
          autoComplete="off"
          // preventDefault
          disabled={!sending}
          value={formData.name}
          onChange={handleChange}
          className=" appearance-none border-none outline-none  border ml-3  w-full"
          required
        />
      </div>
      <div className="flex">
        <label>Email: </label>
        <input
          autoComplete="off"
          name="email"
          type="email"
          disabled={!sending}
          value={formData.email}
          onChange={handleChange}
          className="appearance-none border-none outline-none  border ml-3  w-full"
          required
        />
      </div>
      <div className="flex">
        <label>Message: </label>
        <textarea
          autoComplete="off"
          name="message"
          disabled={!sending}
          value={formData.message}
          onChange={handleChange}
          className="appearance-none border-none outline-none border ml-3  w-full"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={!sending}
        className="hover:text-gray-300"
      >
       <div>+ - - - - +</div>
       <div>| Send |</div>
       <div>+ - - - - + </div>
      </button>
      <button
      onClick={handleSkip}
      disabled={!sending}
        className=" px-4 rounded  ml-5 hover:text-gray-300"
      >
        <div>+ - - - - +</div>
       <div>| Skip |</div>
       <div>+ - - - - + </div>
      </button>
      <div className="mt-2 text-gray-400">{status}</div>
    </form>
  );
}

export default Contact;
