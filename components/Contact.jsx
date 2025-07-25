"use client";
import { useState } from "react";
import { useTerminal } from "@/context/TerminalContext";

function Contact() {
  const { setSending, setHistory } = useTerminal();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <form onSubmit={handleSubmit} className="text-white font-mono">
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-black border p-1 mb-2 w-full"
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-black border p-1 mb-2 w-full"
          required
        />
      </div>
      <div>
        <label>Message: </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-black border p-1 mb-2 w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-700 px-4 py-1 rounded hover:bg-green-600"
      >
        Send
      </button>
      <div className="mt-2">{status}</div>
    </form>
  );
}

export default Contact;
