"use client";
import Progressbar from "@/components/Progressbar/Progressbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IQuestion {
  title: string;
  answers: string[];
}

export default function Page({ params }: { params: { title: string } }) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<any>(null);
  const [question, setQuestion] = useState<IQuestion[]>([
    {
      title: "O que é css?",
      answers: [
        "CSS é uma linguagem de marcação usada para estruturar o conteúdo de páginas web.",
        "Cascading style sheets",
        "CSS é um banco de dados usado para armazenar informações de websites.",
        "CSS é um protocolo de comunicação entre servidores web.",
      ],
    },
  ]);

  return (
    <main className="flex flex-col max-w-md m-auto mt-16">
      <h4>{params.title}</h4>
      <Progressbar total={13} current={current}></Progressbar>
      <h1>Questão {current + 1}</h1>
      <h4>{question[current]?.title}</h4>
      <div className="mt-4 flex flex-col gap-2">
        {question[current]?.answers?.map((item, index) => {
          return (
            <div
              className={`question__box ${
                selected === index && "question__box__selected"
              }`}
              key={item}
              onClick={() => {
                setSelected(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="flex mt-4 justify-end gap-4">
        <button
          className="button__secundary"
          onClick={() => {
            setCurrent((prev) => prev + 1);
          }}
        >
          Desistir
        </button>
        <button
          onClick={() => {
            setCurrent((prev) => prev + 1);
          }}
          className="button__primary"
        >
          Próximo
        </button>
      </div>
    </main>
  );
}
