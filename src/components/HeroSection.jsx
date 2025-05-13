import { motion } from "framer-motion";
import pinturaRenascentista from "../assets/pinturaRenascentista.jpg";
import pinturaBotaoFlor from "../assets/pinturaBotaoFlor.jpg";
import pinturaBotaoGuerreiro from "../assets/pinturaBotaoGuerreiro.jpg";

export default function HeroSection() {
  return (
    <section className="flex h-screen w-full">
      {/* Lado Esquerdo */}
      <div className="flex-1 flex flex-col justify-center items-start p-10 bg-[#f3f3f3]">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-semibold text-black leading-snug font-serif mb-32"
        >
          Oi, eu sou Patrick.
          <br />
          Crio experiências digitais impactantes.
        </motion.h1>

       <div className="space-y-4 w-full max-w-sm">
      {/* BOTÃO SOBRE */}
        <motion.a
            href="#sobre"
            className="block rounded-tl-3xl overflow-hidden text-white text-2xl font-serif h-[80px] relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 2.2, ease: "easeOut" }}
        >
            <motion.div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${pinturaBotaoFlor})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <span className="relative z-10 px-4">Sobre</span>
        </motion.a>

        {/* BOTÃO PROJETOS */}
        <motion.a
            href="#projetos"
            className="block rounded-bl-3xl overflow-hidden text-white text-2xl font-serif h-[80px] relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 2.2, ease: "easeOut" }}
        >
            <motion.div
            className="absolute inset-0 z-0"
            style={{
                backgroundImage: `url(${pinturaBotaoGuerreiro})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <span className="relative z-10 px-4">Projetos</span>
        </motion.a>

        {/* LINK ENTRE EM CONTATO */}
        <motion.a
            href="#contato"
            className="block pt-4 border-t border-black text-black text-xl font-serif hover:underline"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1.6, ease: "easeOut" }}
        >
            Entre em contato.
        </motion.a>
        </div>

      </div>

      {/* Lado Direito */}
      <motion.div
        className="flex-1 relative bg-cover bg-center hidden md:flex items-center justify-center p-10 overflow-hidden"
        style={{ backgroundImage: `url(${pinturaRenascentista})` }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
        <p className="relative z-10 text-white text-lg leading-relaxed text-center font-serif max-w-md">
          Sou apaixonado por desenvolver interfaces acessíveis, úteis e limpas. Dedico meu tempo a estudar e aplicar os melhores conceitos de acessibilidade na web. Atualmente, estou aprimorando minhas habilidades em React e focando no Front-end, pois sempre fui fascinado pelo design e pela experiência do usuário. Além da programação, também crio artes digitais, que você pode conferir no meu Twitter.
        </p>
      </motion.div>

    </section>
  );
}
