import { Link } from "react-router-dom";
import SimpleList from "@/app/components/simpleList";

export default function ServiceManager() {
  const requisitos = [
    "WhatsApp Business API configurada. É por nossa conta.",
    "Banco de dados MongoDB ativo.*1 Terceirizado e cobrado por utilização",
    "Serviço de implantação em nuvem.*1.",
    "Serviço de gerenciamento SynapTech para integração da infraestrutura.",
    "*1 - Serviços Terceirizados e cobrado por utilização no cartão de crédito.",
  ];

  const fluxo = [
    "Cliente envia solicitação do serviço via WhatsApp ou e-mail.",
    "Sistema registra a solicitação no banco de dados.",
    "Sistema solicita ao cliente os documentos necessários.",
    "Cliente envia os documentos via WhatsApp.",
    "Notificação automática é enviada para a equipe responsável.",
    "Equipe verifica cada documento para aprovação.",
    "Sistema solicita re-envio de documentos rejeitados indicando o motivo.",
    "Aprovação de todos os documentos solicitados.",
    "Solicitação é concluída e cliente é notificado.",
    "Equipe inicia o serviço solicitado.",
    "Cliente acompanha o progresso via WhatsApp ou e-mail.",
    "Serviço é concluído e cliente recebe uma notificação.",
    "Sistema envia qrCode para pagamento via PIX.",
    "Confirmação de pagamento é recebida e registrada.",
    "Recibo de pagamento é enviado automaticamente ao cliente.",
    "Feedback é solicitado ao cliente para melhoria contínua.",
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col items-center px-4 py-8">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-[#00E0FF] mb-2">Gerenciamento de Serviços</h1>
        <p className="text-gray-400 text-sm mb-4">
          Plataforma SynapTech para orquestração e monitoramento inteligente de serviços empresariais.
        </p>
        <Link to="/" className="text-[#007BFF] text-sm hover:underline">
          ← Voltar para a página inicial
        </Link>
      </header>

      <section className="max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-3">Descrição do Projeto</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          O SynapTech Service Manager é uma solução completa de gerenciamento dos serviços 
          oferecidos ao cliente. Desenvolvido com tecnologias modernas como React,
           node.js e MongoDB, facilita a administração eficiente do fluxos de atendimento de cada cliente.
          A plataforma permite o monitoramento e gerenciamento das solicitações cliente 
          empresa e empresa cliente, pelo whatsapp ou e-mail, itegrado com o whatsapp 
          business da empresa.
        </p>
      </section>

      <section className="max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-3">Benefícios</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Otimize o atendimento do seu cliente. Se o seu serviço requer envio de documentos,
          aprovação de etapas ou qualquer outro tipo de interação, o Service Manager é a solução ideal.
          Com ele, você pode automatizar processos, acompanhar o progresso em tempo real e garantir que
          cada solicitação seja tratada com a máxima eficiência.
        </p>
      </section>

      <section className="max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-3">Fluxo de Trabalho</h2>
        <ul className="text-gray-300 text-sm text-left list-disc list-inside space-y-1">
          {fluxo.map((flx, i) => (
            <li key={i}>{flx}</li>
          ))}
        </ul>
      </section>

      <section className="max-w-md mb-8 text-center">
        <h2 className="text-xl font-semibold text-[#007BFF] mb-3">Requisitos</h2>
        {/*} <ul className="text-gray-300 text-sm text-left list-disc list-inside space-y-1">
          {requisitos.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul> */}
        <SimpleList items={requisitos} />
      </section>

      <a
        href="#"
        className="bg-[#007BFF] hover:bg-[#00E0FF] text-white font-semibold rounded-lg py-2 px-6 transition-all"
      >
        Acessar o projeto
      </a>

      <footer className="mt-10 text-gray-400 text-xs text-center">
        © {new Date().getFullYear()} SynapTech — Gerencie com inteligência. 
      </footer>
    </div>
  );
}
