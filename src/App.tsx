import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector("#projetos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-purple-900 to-[#1e293b] text-white font-sans">
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-all ${scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
          }`}
      >
        <h1 className="text-xl md:text-2xl font-extrabold text-purple-400 tracking-wide">
          &lt;emelly/&gt;
        </h1>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          {["Sobre", "Formação", "Projetos", "Contato"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 md:pt-32"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Olá, sou <span className="text-purple-400">Emelly Freitas</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Desenvolvedora Full Stack apaixonada por criar soluções modernas e eficientes.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            Ver Projetos
          </button>


          <a
            href="https://drive.google.com/file/d/1eH5rgMsw6UuK8-7LK_R8Gf13wGlyIkxL/view?usp=sharing"
            className="px-8 py-3 rounded-xl border border-purple-400 hover:bg-purple-700/30 text-white font-semibold shadow-md transition-all duration-300"
            target="_blank"
            rel="noreferrer"
          >
            Baixar CV
          </a>
        </div>
      </motion.section>


      {/* SOBRE */}
      <section id="sobre" className="max-w-4xl mx-auto py-16 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-purple-400 text-center"
        >
          Sobre Mim
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-7 text-gray-300 text-center"
        >
          Sou desenvolvedora Full Stack com experiência em ERP, integrações API,
          front-end (React) e back-end (Node.js, Java). Amo criar soluções escaláveis
          e intuitivas.
        </motion.p>
      </section>

      {/* FORMAÇÃO */}
      <section id="formação" className="py-16 px-6 bg-[#1e293b]/60">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
          Formação & Cursos
        </h3>
        <div className="max-w-4xl mx-auto grid gap-8">
          {[
            {
              title: "Análise e Desenvolvimento de Sistemas",
              desc: "Universidade de Fortaleza (UNIFOR) | 2023 – 2025",
            },
            {
              title: "Curso Técnico em Informática",
              desc: "EEEP José de Barcelos | 2016 – 2018",
            },
            {
              title: "Cursos Extras",
              desc: ["Java", "ReactJs", "APIs RESTful com Node.js", "Python para Automação"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border border-purple-700 p-6 rounded-xl bg-[#0f172a]/70 backdrop-blur-md shadow-lg"
            >
              <h4 className="text-xl font-semibold text-purple-300">{item.title}</h4>
              {Array.isArray(item.desc) ? (
                <ul className="list-disc pl-6 text-gray-300 mt-2">
                  {item.desc.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{item.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      {/* EXPERIÊNCIAS */}
      <section id="experiencias" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
          Experiências
        </h3>
        <div className="max-w-5xl mx-auto grid gap-8">
          {[
            {
              cargo: "Analista de Desenvolvimento de Sistemas",
              empresa: "Vonixx",
              periodo: "Dez/2023 – Atual",
              atividades: [
                "Desenvolvi customizações e automações no ERP Sankhya utilizando Java.",
                "Criei interfaces modernas e responsivas com TypeScript, React e Tailwind CSS.",
                "Implementei integrações com APIs RESTful, garantindo comunicação entre sistemas.",
                "Otimizei queries SQL para melhorar performance de relatórios."
              ]
            },
            {
              cargo: "Assistente de Inteligência Comercial",
              empresa: "UniAteneu",
              periodo: "Jan/2023 – Nov/2023",
              atividades: [
                "Desenvolvi scripts de web scraping em Python com Selenium.",
                "Automatizei processos de coleta e análise de dados, eliminando tarefas manuais."
              ]
            },
            {
              cargo: "Estagiário em Desenvolvimento Web",
              empresa: "ÁgilGPR",
              periodo: "Ago/2018 – Set/2019",
              atividades: [
                "Desenvolvi aplicações web com Ruby on Rails, ReactJS e Bootstrap.",
                "Modelei e gerenciei banco de dados PostgreSQL, garantindo integridade e performance.",
                "Participei da criação de MVPs com foco em entregas rápidas."
              ]
            }
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="border border-purple-700 p-6 rounded-xl bg-[#0f172a]/70 backdrop-blur-md shadow-lg"
            >
              <h4 className="text-xl font-semibold text-purple-300">{exp.cargo}</h4>
              <p className="text-gray-400">{exp.empresa} | {exp.periodo}</p>
              <ul className="list-disc pl-6 mt-3 text-gray-300">
                {exp.atividades.map((atv, i) => (
                  <li key={i}>{atv}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="bg-[#0f172a]/80 py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
          Projetos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Finfácil",
              desc: "Gerenciamento financeiro com dashboard e autenticação.",
              github: "https://github.com/emy333/front-fin",
              link: "https://finfacil.mariaemelly.com.br/auth",
              image: "/images/finfacil01.PNG",
            },
            {
              title: "RecicleJá",
              desc: "Localização de ecopontos com mapas e geolocalização.",
              github: "https://github.com/emy333/front-recicle-ja",
              link: "https://recicle-ja.vercel.app/login",
              image: "/images/RecicleJá.PNG",
            },
            {
              title: "Portfólio Imobiliária",
              desc: "Site responsivo com busca filtrada e integração API.",
              github: "https://github.com/emy333/FM2-PORTFOLIO",
              link: "https://fm-2-portfolio.vercel.app/",
              image: "/images/Fm2Imobiliaria.PNG",
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[#1e293b]/80 border border-purple-700 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-transform"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full aspect-video object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-purple-300">{p.title}</h4>
                <p className="mb-4 text-gray-300">{p.desc}</p>
                <div className="flex gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                  >
                    <Github size={18} /> Código
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                  >
                    <ExternalLink size={18} /> Projeto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-purple-400">Entre em Contato</h3>
        <p className="mb-4 text-gray-300">
          Email:{" "}
          <a
            href="mailto:emellysilva1000@gmail.com"
            className="text-purple-400 hover:underline"
          >
            emellysilva1000@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/emellyfs" target="_blank" className="text-purple-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/emy333" target="_blank" className="text-purple-400 hover:underline">
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-purple-700 text-gray-500 text-sm">
        © {new Date().getFullYear()} Emelly. Todos os direitos reservados.
      </footer>
    </div>
  );
}
