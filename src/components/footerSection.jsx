import pinturaFooter from "../assets/pinturaSeção.jpg"; // ou outra imagem que prefira

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white py-12 px-6"
      style={{
        backgroundImage: `url(${pinturaFooter})`,
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-4 font-serif">
        <p className="text-lg">© {new Date().getFullYear()} Patrick D´Sants</p>
        <p className="text-sm opacity-80">
          Desenvolvido com React + Tailwind | Arte, Código e Café ☕
        </p>
      </div>
    </footer>
  );
}
