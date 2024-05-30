"use client";
import { Layers } from "lucide-react";
import Header from "./header";
import CodeEffect from "./code-effect";
import SkillsItems from "./skills-items";
import CardItem from "./card-item";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Form from "./form";

export default function LandingPage() {
  const sampleCode = `function helloWorld(freela: boolean) {
    if (freela) {
      // Se há um freela, vamos trabalhar!
      console.log("Freelance project detected! Let's get to work."); 

      // Aceitamos pagamentos em café ☕️
      console.log("Accepting payments in coffee."); 
    }
  }`;

  return (
    <div className="mb-10">
      <Header />

      <div
        className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-around mt-48 px-10"
        id="home"
      >
        <div>
          <h1 className="text-3xl font-bold max-w-[520px]">
            Seja bem vindo ao nosso site! Sempre dispostos a soluções webs
          </h1>
          <p className="max-w-[500px] mt-2">
            Estamos aqui para transformar suas visões em realidade digital e
            ajudá-lo a alcançar novos patamares de sucesso na web.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Layers />{" "}
            <span className="text-sm">Desenvolvimento fullstack</span>
          </div>
        </div>

        <div className="bg-gray-100/20  p-4 rounded-lg backdrop-blur-xl text-[10px] w-[380px] lg:text-[14px] lg:w-[600px]">
          <CodeEffect code={sampleCode} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center mt-28" id="skills">
        <SkillsItems />
      </div>

      <div className="flex flex-col gap-10 items-center mt-14">
        <h1 className="text-2xl font-bold max-w-[400px] text-center">
          Utilizando sempre as melhores ferramentas em seus sistemas.
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <CardItem
            Icon={SiPrisma}
            title="Prisma ORM"
            description="Prisma simplifica a interação com bancos de dados SQL, fornecendo um ORM (Object-Relational Mapping) intuitivo e fácil de usar."
          />
          <CardItem
            Icon={TbBrandNextjs}
            title="Next.Js"
            description="Graças ao SSG e SSR, as páginas são entregues mais rapidamente aos usuários, melhorando o desempenho e a experiência do usuário. As páginas são renderizadas no servidor, o que melhora a otimização para motores de busca (SEO)."
          />
          <CardItem
            Icon={BiLogoPostgresql}
            title="Postgres DB"
            description="PostgreSQL é conhecido por sua confiabilidade, sendo capaz de lidar com grandes volumes de dados e cargas de trabalho intensas."
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center mt-40 px-10 gap-10 lg:gap-0 pb-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">
            Pronto para dar vida à sua visão digital?
          </h1>
          <p className="max-w-[450px] font-semibold">
            Envie sua demanda, seja para o desenvolvimento web, criação de
            sistemas, aplicativos móveis ou qualquer outra necessidade
            tecnológica. Estamos aqui para transformar suas ideias em realidade!
          </p>
        </div>
        <div id="form">
          <Form />
        </div>
      </div>
    </div>
  );
}
