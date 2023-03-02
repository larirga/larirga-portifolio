import React from 'react'
import project_image from '../images/project_image.png'

export default function Projects() {
  return (
    <div>
      <p className='about-title'>Projects</p>
      <div className='div-project'>
        <div className='div-files'>
        <a href="https://github.com/larirga/ficha-D-D">
        <img className='project-picture' src={ project_image } alt="ti" />
        </a>
        <a href="https://github.com/larirga/project_shopping_cart">
        <img className='project-picture' src={ project_image } alt="ti" />
        </a>
        <a href="https://github.com/larirga/solar_system_project">
        <img className='project-picture' src={ project_image } alt="ti" />
        </a>
        <a href="https://github.com/larirga/project_game_trunfo">
        <img className='project-picture' src={ project_image } alt="ti" />
        </a>
        <a href="https://github.com/larirga">
        <img className='project-picture' src={ project_image } alt="ti" />
        </a>
        </div>
        <div className='div-name'>
        <a href="https://github.com/larirga/ficha-D-D">
        <p>1. Project <b>Ficha D&D</b> with HTML5 and CSS</p>
        </a>
        <a href="https://github.com/larirga/project_shopping_cart">
        <p>2. Project <b>Shopping</b> with JS, HTML5 and CSS </p>
        </a>
        <a href="https://github.com/larirga/solar_system_project">
        <p>3. Project <b>Solar System</b> with React.js</p>
        </a>
        <a href="https://github.com/larirga/project_game_trunfo">
        <p>4. Project <b>Game Trunfo</b> with React.js</p>
        </a>
        <a href="https://github.com/larirga">
        <p>5. Project <b>Recipes App</b> with Reach.js</p>
        </a>
        </div>
        </div>
    </div>
  )
}
