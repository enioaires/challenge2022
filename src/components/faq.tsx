import React from "react";
import Accordion from "./accordion";

const Faq = () => {
  const items = [
    {
      header: "O que é energia limpa?",
      content: "Yes!",
    },
    {
      header:
        "Qual a diferença entre tarifas de energia limpa e a energia não renovável?",
      content: "Yes!",
    },
    {
      header:
        "Quanto tempo demora para eu receber os créditos na minha conta de luz?",
      content: "Yes!",
    },
    {
      header:
        "Quais documentos preciso enviar para fazer parte da cooperativa?",
      content: "Yes!",
    },
    {
      header:
        "Como faço para vender energia limpa e abastecer a minha concessionária de energia?",
      content: "Yes!",
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
