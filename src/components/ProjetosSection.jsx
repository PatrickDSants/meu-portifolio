import React from "react";
import { motion } from "framer-motion";

import pinturaBotaoFlor from "../assets/pinturaBotaoFlor.jpg";
import pinturaCompetencias from "../assets/pinturaCompetencias.jpg";

import calculator from "../assets/calculator.png";
import carousel from "../assets/Carousel.png";
import jogodavelha from "../assets/jogodavelha.png";
import stray from "../assets/stray.png";
import countdown from "../assets/Newyearcountdown.png";
import passwordgen from "../assets/passwordgenerator.png";
import devnestImg from "../assets/devnestImg.png";
import mentorChallengeImg from "../assets/mentorChallengeImg.png";

const projects = [
     {
    title: "DevNest",
    description: "Plataforma para devs encontrarem projetos open source para contribuir.",
    liveLink: "https://devnest-zeta.vercel.app", // <- CORRIGIDO
    githubLink: "https://github.com/PatrickDSants/devnest", // <- CORRIGIDO
    image: devnestImg,
    tech: ["React", "Tailwind", "Firebase", "Node"]
  },
  {
    title: "Frontend Mentor Challenge",
    description: "Desafio prático para recriar uma página com foco em layout e responsividade.",
    liveLink: "https://patrickdsants.github.io/front-endMentorChallenge/", // <- CORRIGIDO
    githubLink: "https://github.com/PatrickDSants/front-endMentorChallenge", // <- CORRIGIDO
    image: mentorChallengeImg,
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Calculator",
    description: "Uma calculadora funcional para operações básicas.",
    image: calculator,
    liveLink: "https://patrickdsants.github.io/Calculator/",
    githubLink: "https://github.com/PatrickDSants/Calculator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Carousel",
    description: "Um carrossel interativo de imagens usando JavaScript.",
    image: carousel,
    liveLink: "https://patrickdsants.github.io/carousel/",
    githubLink: "https://github.com/PatrickDSants/carousel",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Jogo da Velha",
    description: "Um jogo clássico da velha feito com HTML, CSS e JavaScript.",
    image: jogodavelha,
    liveLink: "https://jogodavelha-ruby.vercel.app/",
    githubLink: "https://github.com/PatrickDSants/jogodavelha",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Stray Jump n'Run",
    description: "Um jogo de plataforma inspirado no universo de Stray.",
    image: stray,
    liveLink: "https://straygame-bweo.vercel.app/",
    githubLink: "https://github.com/PatrickDSants/straygame",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "New Year Countdown",
    description: "Contagem regressiva animada para o Ano Novo.",
    image: countdown,
    liveLink: "https://new-year-countdown-m1te.vercel.app/",
    githubLink: "https://github.com/PatrickDSants/NewYearCountdown",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Password Generator",
    description: "Gerador de senhas seguras e aleatórias.",
    image: passwordgen,
    liveLink: "https://patrickdsants.github.io/PasswordGenerator/",
    githubLink: "https://github.com/PatrickDSants/PasswordGenerator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="bg-[#f3f3f3] py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-2 w-fit mx-auto">
        Meus Trabalhos
      </h2>
      <p className="text-center text-gray-600 italic mb-16">
        Criações com foco em design, código e propósito.
      </p>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-300 transform -translate-x-1/2 z-0"></div>

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`relative z-10 flex flex-col md:w-[90%] ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            } group`}
          >
            <img
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
              className="w-full h-64 object-cover rounded shadow-lg"
            />

            <h3 className="mt-6 text-2xl font-bold font-serif">{project.title}</h3>
            <p className="mt-2 text-gray-700 font-light">{project.description}</p>

            <motion.div
              className="flex flex-wrap gap-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-white text-sm font-mono px-3 py-1 rounded-full shadow-sm relative"
                  style={{
                    backgroundImage: `url(${pinturaCompetencias})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      zIndex: 0,
                      borderRadius: "9999px",
                    }}
                  ></span>
                  <span className="relative z-10">{tech}</span>
                </span>
              ))}
            </motion.div>

            <div className="flex gap-4 mt-6">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-all duration-300"
              >
                Acessar
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
      <a
        href="https://github.com/PatrickDSants"
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-white text-xl px-8 py-4 rounded shadow-lg bg-cover bg-center overflow-hidden hover:scale-105 transition-transform duration-700"
        style={{
          backgroundImage: `url(${pinturaBotaoFlor})`,
        }}
      >
        <span
          className="absolute inset-0 bg-black bg-opacity-50 rounded"
          style={{ zIndex: 0 }}
        ></span>
        <span className="relative z-10">Ver GitHub</span>
      </a>
      </div>
    </section>
  );
}
