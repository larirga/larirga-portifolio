import React from 'react'
import about_image from '../images/about_image.png'


export default function About() {
  return (
    <div className='about-div'>
      <p className='about-title'> About </p>
        <p>Me chamo Larissa,</p>
        <p className='text'>sou de BH, capital de Minas Gerais. Ultimamente, tenho focado meus estudos em JavaScript tanto o frontend
        quanto o backend, adoro mexer com React.js, inclusive foi a biblioteca que usei nessa página. No meu tempo livre gosto de assistir animes e doramas, ler e jogar.
          Adoro sair, cozinhar, aprender e conversar com meus amigos e família.
          Tenho dois gatinhos lindos, o Tony e a Shinji. Além disso, sou formada em Filosofia pela UFMG e 
          atualmente, estudo desenvolvimento web na Trybe.
          Para saber mais sobre minhas hardskills acesse meu <a href="https://github.com/larirga"><b>gitHub</b></a>.
    </p>

    <div className='text-about'>
    <img className='about-picture' src={ about_image } alt="ti" />
    </div>
    </div>
  )
}
