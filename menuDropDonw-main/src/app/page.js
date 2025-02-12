import Image from "next/image";
import styled from "../style/mainPage.module.css";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <div className={styled.container}>
      <Header />

      <div className={styled.title}>
        <h1>Bem vindo à clínica Healt Care</h1>
        <p>Nossa equipe de profissionais altamente qualificados está pronta para cuidar da sua saúde com dedicação e excelência. Oferecemos um atendimento humanizado, tecnologia de ponta e uma ampla gama de especialidades médicas para garantir seu bem-estar.</p>
        <button className={styled.btnAgendar}>Agendar consulta</button>
      </div>
    </div>
  );
}
