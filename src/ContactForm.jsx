import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  // Using the Formspree endpoint provided by you
  const endpoint = "https://formspree.io/f/xppwkjzl";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("message", form.message);

      const res = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.error || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 540 }}>
      <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-header">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <div style={{ marginTop: 8 }}>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </div>

        {status === "sent" && <p style={{ color: "green" }}>Thanks — message sent!</p>}
        {status === "error" && (
          <p style={{ color: "red" }}>There was an error sending your message.</p>
        )}
      </form>
    </div>
  );
}
