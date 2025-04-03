import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"

const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    ) : (
      <main className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Formulario de contacto */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Contacto</h2>
            <form action="/submit" method="post" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefono" className="block font-semibold mb-1">Teléfono:</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su número de teléfono" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="instagram" className="block font-semibold mb-1">Instagram:</label>
                  <input type="text" id="instagram" name="instagram" placeholder="Ingrese su usuario de Instagram" className="w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label htmlFor="gmail" className="block font-semibold mb-1">Gmail:</label>
                  <input type="email" id="gmail" name="gmail" pattern="[a-z0-9._%+-]+@gmail\\.com" placeholder="Ingrese su correo de Gmail" required className="w-full border rounded px-3 py-2" />
                </div>
                <div>
                  <label htmlFor="twitter" className="block font-semibold mb-1">Twitter:</label>
                  <input type="text" id="twitter" name="twitter" placeholder="Ingrese su usuario de Twitter" className="w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label htmlFor="especialidad" className="block font-semibold mb-1">Especialidad:</label>
                  <select id="especialidad" name="especialidad" required className="w-full border rounded px-3 py-2">
                    <option value="" disabled selected>Seleccione una opción</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="ciberseguridad">Ciberseguridad</option>
                    <option value="soporte-tecnico">Soporte Técnico</option>
                    <option value="inteligencia-artificial">Inteligencia Artificial</option>
                    <option value="redes">Redes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="skype" className="block font-semibold mb-1">Skype:</label>
                  <input type="text" id="skype" name="skype" placeholder="Ingrese su usuario de Skype" className="w-full border rounded px-3 py-2" />
                </div>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full bg-neutral-900 text-white py-2 rounded hover:bg-neutral-700 transition">Enviar</button>
              </div>
            </form>
          </div>

          {/* Mapa de ubicación */}
          <div className="bg-white p-6 rounded shadow h-full">
            <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1807.7939901623633!2d-1.8238370807795352!3d37.173789481198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1739474972656!5m2!1ses!2ses"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    )
  )
}

export default Contacto
