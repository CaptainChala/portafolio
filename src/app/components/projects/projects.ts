import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
  {
    name: 'Proyecto Obstetricia',
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL',, 'Docker'],
    imageUrl:
      'https://img.freepik.com/vector-premium/banner-redondo-ginecologia-obstetricia_111409-423.jpg',
    link: 'https://github.com/TSI-Grupo/Proyecto-Obstetricia/tree/obstetricia_deploy',
  },
  {
    name: 'Catálogo Automotriz',
    technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Docker'],
    imageUrl:
      'https://media-front.elmostrador.cl/2023/06/DSC_0108.jpg',
    link: 'https://github.com/CaptainChala/CatalogoAutomotriz',
  },
  {
    name: 'Green Web Dev',
    technologies: ['Node.js', 'Express', 'React', 'CO2.js'],
    imageUrl:
      'https://www.sostenibilidad.com/media/816156/desarrollo-sostenible.jpg',
    link: 'https://github.com/Trabajo-de-Titulo-Chala-Mancilla/greenwebdev',
  },
  {
      name: 'Concursos San Valentin',
    technologies: ['Django', 'Vuejs', 'Sqlite', 'Redis', 'Celery', 'Docker'],
    imageUrl:
      'https://andro4all.com/hero/2022/02/Mejores-apps-para-el-San-Valentin2.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    link: 'https://github.com/CaptainChala/concursos_san_valentin',
  },
];

}
