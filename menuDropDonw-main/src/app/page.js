import Image from "next/image";
import styled from "../style/mainPage.module.css";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <div className={styled.container}>
      <Header />

      <div className={styled.title}>
        <h1>Bem vindo à MedVita Centro Clínico!</h1>
        <p>É um prazer recebê-lo em nossa clínica, um espaço dedicado ao seu bem-estar e à sua saúde. Nossa equipe de profissionais altamente qualificados está pronta para oferecer atendimento humanizado, com respeito, cuidado e comprometimento.</p>
        <button className={styled.btnAgendar}>Agendar consulta</button>
      </div>
    </div>
  );
}
