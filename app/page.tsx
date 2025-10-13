'use client'
import { Link } from "react-router-dom";
import { useState } from "react";

const emailLink = process.env.NEXT_PUBLIC_EMAIL_LINK || "";

export default function Home() {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage("✅ Mensagem enviada com sucesso!");
          form.reset();
        } else {
          setStatusMessage("❌ Ocorreu um erro. Tente novamente.");
        }
      })
      .catch(() =>
        setStatusMessage("❌ Ocorreu um erro. Verifique sua conexão.")
      );
  };

  const projects = [
    {
      title: "Gerenciamento de Serviços",
      img: "/project2.jpg",
      desc: "Plataforma de controle e monitoramento de serviços corporativos em nuvem.",
      link: "service-manager",
    },
    {
      title: "Sistema de vendas por Whatsapp Business",
      img: "/project1.jpg",
      desc: "Faça venda de produtos ou serviços aos clientes por whatsApp, com envio de qrcode para pagamento via PIX.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col items-center px-4 py-8">
      <header className="flex flex-col items-center mb-8 text-center">
        <img src="/synaptech-logo.png" alt="SynapTech Logo" className="w-24 mb-4" />
        <h1 className="text-3xl font-bold text-[#00E0FF]">SynapTech</h1>
        <p className="text-gray-300 mt-2 text-sm">
          IA, automação e nuvem em perfeita sintonia com sua empresa.
        </p>
      </header>

      <section className="max-w-md text-justify mb-10">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-2">Sobre a SynapTech</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          A SynapTech oferece soluções de automação de tarefas oferecendo consultoria 
          para implantação na infraestrutura em nuvem, utilizando tecnologias modernas
           como Python, Node.js e MongoDB.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          Também tabalha com desenvolvimento de produtos de software projetodos
           de acordo com as necessidades de cada cliente, ou dos requisitos de seus
           projetos.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          Se seu problema de automação envolve o uso de inteligência artificial
           ou computação em nuvem, a SynapTech conecta sua empresa com a solução adequada.
        </p>
      </section>

      <section className="max-w-md w-full mb-10">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-4 text-center">Projetos</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2A2A2A] rounded-2xl p-4 shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-xl mb-3" />
              <h3 className="text-lg font-bold text-[#00E0FF] mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.desc}</p>
              {project.link.startsWith("/") ? (
                <Link to={project.link} className="text-[#007BFF] text-sm font-medium hover:underline">
                  Ver projeto
                </Link>
              ) : (
                <a href={project.link} className="text-[#007BFF] text-sm font-medium hover:underline">
                  Ver projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-md text-justify mb-10">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-2">Precisa de um solução especifica?</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Entre em contato com a SynapTech para o desenvolvimento de seu projeto de software ou
          para obter uma solução projetada para sua necessidade especifica.
        </p>
      </section>

      <section className="max-w-md w-full mb-10 text-center">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Entre em contato</h2>
        <form
          action={emailLink}
          method="POST"
          onSubmit={handleSubmit}
          className="bg-[#2A2A2A] rounded-2xl p-4 shadow-lg flex flex-col gap-3"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nova mensagem do site SynapTech!" />

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="bg-[#1E1E1E] text-white border border-[#00E0FF] rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#007BFF]"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="bg-[#1E1E1E] text-white border border-[#00E0FF] rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#007BFF]"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            rows={4} 
            required
            className="bg-[#1E1E1E] text-white border border-[#00E0FF] rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#007BFF]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#007BFF] hover:bg-[#00E0FF] text-white font-semibold rounded-lg py-2 transition-all"
          >
            Enviar mensagem
          </button>
        </form>
        {statusMessage && (
          <p className="mt-3 text-sm font-medium text-[#00FF9D]">{statusMessage}</p>
        )}
      </section>

      <footer className="mt-6 text-gray-400 text-xs text-center">
        © {new Date().getFullYear()} SynapTech — Conectando inteligência e automação.
      </footer>
    </div>
  );
}
