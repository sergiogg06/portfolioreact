import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Columna izquierda - Perfil */}
        <aside className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow h-full">
            <div className="flex justify-center mb-4">
              <img
                src="2BF41C0F-3A4C-4F86-9858-66ED4BBDA1A2.JPG"
                alt="Foto perfil"
                className="w-28 h-28 object-cover rounded shadow"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold border-b pb-1 mb-2">Idiomas</h2>
              <table className="w-full text-sm border">
                <thead className="bg-gray-800 text-white">
                  <tr><th className="p-1">Idioma</th><th className="p-1">Estado</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t"><td className="p-1">Inglés</td><td className="p-1">En proceso</td></tr>
                  <tr className="border-t"><td className="p-1">Francés</td><td className="p-1">Cosas mínimas</td></tr>
                  <tr className="border-t"><td className="p-1">Español</td><td className="p-1">Nativo</td></tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <h2 className="text-sm font-semibold border-b pb-1">Aptitudes</h2>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>Trabajo en equipo</li>
                <li>Iniciativa</li>
                <li>Aprendizaje fluido</li>
                <li>Buena comunicación</li>
              </ul>
            </div>

            <div className="mt-4">
              <h2 className="text-sm font-semibold border-b pb-1">Habilidades</h2>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>HTML y CSS (Básico-Medio)</li>
                <li>Java Básico</li>
                <li>Instalación de redes</li>
                <li>Bases de datos (Básico)</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Columna derecha - Contenido principal */}
        <section className="col-span-1 md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900">Sergio Gallardo Grima</h2>

            <article className="mt-4">
              <h3 className="text-md font-semibold">Resumen profesional</h3>
              <p className="text-sm mt-1">
                Meses trabajando como técnico de redes de fibra. Siempre me ha gustado el tema de los ordenadores a nivel físico.
                Estoy al día de los últimos componentes que salen al mercado. He montado mi propio ordenador y el de algunas amistades.
              </p>
            </article>

            <article className="mt-4">
              <h3 className="text-md font-semibold">Historial laboral</h3>
              <p className="text-sm mt-1">
                Abril 2024 - Junio 2024<br />
                Prácticas en Acaciophone: instalación de fibra, antena y configuración/redes.
              </p>
            </article>

            <article className="mt-4">
              <h3 className="text-md font-semibold">Formación</h3>
              <p className="text-sm mt-1">
                2024<br />
                Grado Medio en Sistemas Microinformáticos y Redes – IES Cura Valera, Huércal-Overa
              </p>
              <p className="text-sm mt-1">
                2025<br />
                Acabando el primer año de Grado Superior en Desarrollo de Aplicaciones Multiplataforma para poder conseguir un buen trabajo, fijo y estable para poder establecerme un buen futuro.
              </p>
            </article>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-2">Tecnologías que conozco</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <img src="spring.jpg" alt="Spring" className="rounded shadow" />
                <img src="Bootstrap.jpg" alt="Bootstrap" className="rounded shadow" />
                <img src="react.png" alt="React" className="rounded shadow" />
                <img src="Angular.png" alt="Angular" className="rounded shadow" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
