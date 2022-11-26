import React from "react";
import Accordion from "./accordion";

const Faq = () => {
  const items = [
    {
      header: "O que é energia limpa?",
      content: "Challenge 2022 - Os donos da bola!",
    },
    {
      header:
        "Qual a diferença entre tarifas de energia limpa e a energia não renovável?",
      content: "Challenge 2022 - Os donos da bola!",
    },
    {
      header:
        "Quanto tempo demora para eu receber os créditos na minha conta de luz?",
      content: "Challenge 2022 - Os donos da bola!",
    },
    {
      header:
        "Quais documentos preciso enviar para fazer parte da cooperativa?",
      content: "Challenge 2022 - Os donos da bola!",
    },
    {
      header:
        "Como faço para vender energia limpa e abastecer a minha concessionária de energia?",
      content: "Challenge 2022 - Os donos da bola!",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-10/12">
      <h1 className="text-center text-2xl font-bold text-green-primary">
        FAQ - Perguntas e Respostas
      </h1>
      <p className="text-center text-lg font-normal text-gray-default">
        Confira as perguntas mais frequentes{" "}
      </p>
      <div className="p-6" />
      <div className="w-11/12 flex justify-center ml-[-2rem]">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default Faq;
