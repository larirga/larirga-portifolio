import React from 'react'
import about_image from '../images/about_image.png'
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className='about-div'>
      <p className='about-title'> About </p>
        <p>Me chamo Larissa,</p>

    <div className='text-about'>
    <div className='about-picture'>
    <img className='about-picture' src={ about_image } alt="ti" />
    </div>
    <p>Sou de BH, capital de Minas Gerais. Gosto de assistir séries, animes e doramas, de ler e jogar no meu tempo livre. 
    Adoro sair, cozinhar, aprender e conversar com meus amigos e família.
    Tenho dois gatinhos lindos, o tony e a Shinji. Sou formada em Filosofia pela UFMG e 
    atualmente, estudo desenvolvimento web na Trybe. Ultimamente, tenho focado meus estudos em frontend e backend, adoro
    mexer com react, inclusive foi a biblioteca que usei nessa página.
    Para saber mais sobre minhas hardSkills acesse meu <a href="https://github.com/larirga"><b>gitHub</b></a>.
    </p>
    </div>
    </div>
  )
}
