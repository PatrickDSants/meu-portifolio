import { motion } from "framer-motion";
import pinturaSecao from "../assets/pinturaSeção.jpg";
import suaFoto from "../assets/foto.jpg"; // substitua pelo nome correto

export default function SobreMimSection() {
  return (
    <section id="sobre" className="relative w-full bg-[#f3f3f3] overflow-hidden py-24">
      {/* Background com camada escura */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${pinturaSecao})`,
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Imagem do Patrick */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full md:w-1/2 border-t border-b border-white pt-6"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide">
            Sobre Mim:
          </h2>
          <div className="overflow-hidden rounded-md border-t border-b border-none pt-6">
            <img
              src={suaFoto}
              alt="Patrick sentado"
              className="w-full object-cover scale-100 hover:scale-110 transition-transform duration-1000 ease-in-out"
            />
          </div>
        </motion.div>

        {/* Texto com fundo da pintura */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full md:w-1/2 bg-transparent border-t border-b border-white p-6"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed font-serif text-justify">
            Olá, Me chamo Patrick, atualmente estou morando em Portugal, sou um
            apaixonado por design e desenvolvimento web. Desde que comecei a estudar
            programação pela Alura, descobri que criar interfaces não é só escrever
            código, mas sim dar vida a ideias e transformar conceitos em experiências
            interativas. Meu grande objetivo é atuar como desenvolvedor front-end,
            unindo minha paixão por design à funcionalidade do código. Sempre fui
            fascinado por arte visual – seja nos desenhos que faço ou nas capas de
            álbuns que crio – e vejo a programação como mais uma forma de expressão.
            <br /><br />
            Cada linha de código que escrevo é como um traço em uma tela, cada animação
            é um detalhe que dá alma à página. Se você busca um desenvolvedor criativo,
            com olhar apurado para estética e experiência do usuário, entre em contato
            por meus links. Vamos criar algo incrível juntos!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
