import Head from "next/head";
import Image from "next/image";
import Button from "@/components/shared/button";
import Planos from "@/components/planos";
import Faq from "@/components/faq";
import { CodeIcon } from "@radix-ui/react-icons";

//PNG
import logo from "../../public/img/logo.png";
import economia from "../../public/img/economia.png";
import um from "../../public/img/texto-um.png";
import dois from "../../public/img/texto-dois.png";
import tres from "../../public/img/texto-tres.png";
import quatro from "../../public/img/texto-quatro.png";
import workers from "../../public/img/workers.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Challenge 2022</title>
        <meta name="description" content="Criado para o Challenge Deal 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center py-8 gap-20">
        <div>
          <Image alt="logo" src={logo} />
          <div className="p-4" />
          <Image alt="economia" src={economia} />
          <div className="p-8" />
          <Button button>Como Funciona ?</Button>
        </div>
        <div className="w-72 flex flex-col justify-center items-center gap-10">
          <p className="font-light text-2xl text-center">
            Conectamos as usinas solares a rede elétrica da sua região
          </p>
          <Image alt="texto-um" src={um} />
          <p className="font-light text-2xl text-center">
            Você escolhe quanto de energia quer comprar
          </p>
          <Image alt="texto-dois" src={dois} />
          <p className="font-light text-2xl text-center">
            Os créditos (kwh) são abatidos na sua conta de luz
          </p>
          <Image alt="texto-tres" src={tres} />
          <p className="font-light text-2xl text-center">
            Os créditos (kwh) são 20% mais baratos do que a energia convencional
          </p>
          <Image alt="texto-quatro" src={quatro} />
        </div>
        <Planos />
        <Faq />
        <Image alt="workers" src={workers} />
        <div className="p-4" />
      </main>
      <footer className="flex flex-row items-center justify-end px-2">
        <CodeIcon />
        <p className="text-sm px-2 text-gray-500">
          Challenge Deal 2022 - Os donos da bola
        </p>
        <CodeIcon />
      </footer>
    </div>
  );
}
