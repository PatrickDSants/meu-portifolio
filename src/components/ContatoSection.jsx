export default function Contato() {
  return (
    <section id="contato" className="bg-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 border-b border-gray-400 pb-4 w-fit mx-auto">
        Entre em Contato
      </h2>

      <div className="max-w-2xl mx-auto text-center space-y-6 font-serif">
        <p className="text-lg text-gray-700">
          Se você tem um projeto em mente, ou quer simplesmente trocar uma ideia
          sobre design, arte ou desenvolvimento front-end, sinta-se à vontade para
          me chamar!
        </p>
        <a
          href="mailto:patrickandersonn29@gmail.com"
          className="inline-block mt-4 px-6 py-3 text-lg border border-black rounded hover:bg-black hover:text-white transition"
        >
          Enviar e-mail
        </a>
      </div>
    </section>
  );
}
