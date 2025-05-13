import pintura1 from "../assets/pinturaBotaoFlor.jpg";
import pintura2 from "../assets/pinturaBotaoGuerreiro.jpg";
import pintura3 from "../assets/pinturaRenascentista.jpg";

const techs = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite", "Git", "Figma", "bootstrap", "SASS", "Styled Components", "Framer Motion", "Node.js",
];

const links = [
  {
    name: "GitHub",
    url: "https://github.com/PatrickDSants",
    bg: pintura1
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/patrick-farias-220455359/",
    bg: pintura2
  },
  {
    name: "Twitter",
    url: "https://x.com/Patriartt", 
    bg: pintura3
  }
];

export default function TechAndLinks() {
  return (
    <section className="py-20 px-6 bg-[#f3f3f3]">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 border-b border-gray-400 pb-4 w-fit mx-auto">
        Skills & Contato
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-mono hover:scale-105 transition duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-48 rounded-xl overflow-hidden shadow-lg group transform transition duration-300 hover:scale-[1.03]"
            style={{
              backgroundImage: `url(${link.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-300" />
            <span className="absolute bottom-4 left-4 text-white text-2xl font-serif z-10 group-hover:underline">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
