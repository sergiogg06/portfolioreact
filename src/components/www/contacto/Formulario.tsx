import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_661xpdi",      // <- Reemplazá con tu Service ID
        "template_eeiyed9",     // <- Reemplazá con tu Template ID
        form.current,
        "t9vTtJjBUaSFDHD-i"       // <- Reemplazá con tu Public Key
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado con éxito");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_email" className="block font-semibold mb-1">
            Correo Electrónico:
          </label>
          <input
            type="email"
            name="user_email"
            required
            placeholder="tucorreo@gmail.com"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Mensaje:
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Escribe tu mensaje aquí..."
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-neutral-900 text-white py-2 rounded hover:bg-neutral-700 transition"
        >
          Enviar
        </button>

        {status && <p className="mt-2 text-sm text-center text-green-600">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
