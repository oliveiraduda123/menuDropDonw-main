'use client'
import styled from "../../style/header.module.css"
import Logo from "../../assets/Logo.svg"
import Image from "next/image"
import { useState } from "react"

export function Header() {
    const [abrirMenu, serAbrirMenu] = useState(false)

    return (
        <div className={styled.container}>
            <div className={styled.logo}>
                <Image src={Logo} alt="" width={55} height={55} />
                <p>MedVita Centro Clínico</p>
            </div>

            <ul className={styled.linksContainer}>
                <li className={styled.menuItem}>Home</li>
                <li className={styled.menuItem}>Médicos
                    <ul className={styled.subLinks}>
                        <li>Listar</li>
                        <li>Adicionar</li>
                        <li>Editar</li>
                        <li>Excluir</li>
                    </ul>
                </li>
                <li className={styled.menuItem}>Pacientes
                    <ul className={styled.subLinks}>
                        <li>Listar</li>
                        <li>Adicionar</li>
                        <li>Editar</li>
                        <li>Excluir</li>
                    </ul>
                </li>
                <li className={styled.menuItem}>Agendamentos
                    <ul className={styled.subLinks}>
                        <li>Listar</li>
                        <li>Adicionar</li>
                        <li>Editar</li>
                        <li>Excluir</li>
                    </ul>
                </li>
            </ul>

        </div>
    )
}