import React, { useState } from "react";
import Select from "./select";
import Button from "./shared/button";
import EnergyIcon from "./icon/energy";

type Props = {};

const Planos = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [plan, setPlan] = useState<string | undefined>();
  const [state, setState] = useState<string | undefined>();

  const planCallback = (plan: string | undefined) => {
    setPlan(plan);
  };

  const stateCallback = (state: string | undefined) => {
    setState(state);
  };

  const optionsConsumo = [
    "100 kwh (média mensal)",
    "150 kwh (média mensal)",
    "200 kwh (média mensal)",
    "250 kwh (média mensal)",
    "300 kwh (média mensal)",
  ];

  const optionsEstados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceara",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraiba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold text-green-primary">
          Nossos planos
        </h1>
        <p className="text-center text-lg font-normal text-green-primary">
          Compare os custos e veja a economia
        </p>
        <div className="p-3" />
        <Select
          options={optionsConsumo}
          placeholder="Qual seu custo mensal de energia?"
          value={planCallback}
        />
        <div className="p-1" />
        <Select
          options={optionsEstados}
          placeholder="Qual estado você reside?"
          value={stateCallback}
        />
        <div className="p-3" />
        <Button
          button
          onClick={() => {
            plan && state
              ? setIsOpen(!isOpen)
              : alert("Selecione um plano e o estado onde vive.");
          }}
        >
          Ver Planos
        </Button>
      </div>
      {isOpen && (
        <div className="flex flex-col bg-white-default p-10 gap-6 w-full">
          <div>
            <h1 className="text-center text-3xl font-bold text-green-primary">
              Plano {plan?.replace("(média mensal)", "")}
            </h1>
            <p className="text-center text-lg font-normal text-green-primary">
              Economia de R$ 18,00 mensais
            </p>
          </div>
          <div className="flex flex-row items-center justify-between px-14">
            <div>
              <p className="text-red-default text-sm text-center font-light">
                Consumo
              </p>
              <p className="text-red-default text-xl text-center font-semibold">
                {plan?.replace("(média mensal)", "")}
              </p>
            </div>
            <EnergyIcon fill="#F94646" />
            <div>
              <p className="text-red-default text-sm text-center font-light">
                Energia atual
              </p>
              <div className="flex flex-row items-baseline">
                <p className="text-red-default text-xs text-center font-light">
                  R$
                </p>
                <p className="text-red-default text-xl text-center font-semibold">
                  {plan?.replace("kwh (média mensal)", "")}
                </p>
                <p className="text-red-default text-xs text-center font-light">
                  ,00
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-14">
            <div>
              <p className="text-green-primary text-sm text-center font-light">
                Consumo
              </p>
              <p className="text-green-primary text-xl text-center font-semibold">
                {plan?.replace("(média mensal)", "")}
              </p>
            </div>
            <EnergyIcon fill="#538A3E" />
            <div>
              <p className="text-green-primary text-sm text-center font-light">
                Energia limpa
              </p>
              <div className="flex flex-row items-baseline">
                <p className="text-green-primary text-xs text-center font-light">
                  R$
                </p>
                <p className="text-green-primary text-xl text-center font-semibold">
                  {Number(plan?.replace("kwh (média mensal)", "")) -
                    Number(plan?.replace("kwh (média mensal)", "")) * 0.18}
                </p>
                <p className="text-green-primary text-xs text-center font-light">
                  ,00
                </p>
              </div>
            </div>
          </div>
          <Button button inverse>
            Contrate Já
          </Button>
        </div>
      )}
    </>
  );
};

export default Planos;
