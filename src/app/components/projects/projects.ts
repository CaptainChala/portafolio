import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  status?: string;
  live?: string;
  repo?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'League of Coach',
      description:
        'Plataforma de coaching para League of Legends: vincula cuentas de Riot, sincroniza el historial de la temporada y entrega estadísticas por rol y campeón, lecciones a partir de errores detectados, objetivos con ritmo de progreso y recomendación de pool de campeones.',
      technologies: ['NestJS', 'Prisma', 'PostgreSQL', 'React 19', 'TanStack Query', 'Clerk', 'Sentry', 'Cloud Run', 'Supabase'],
      status: 'En producción',
      live: 'https://leagueofcoach.pro',
      repo: 'https://github.com/MrChanclas/league-of-coach',
      featured: true,
    },
    {
      name: 'Rex Voleibol',
      description:
        'Sistema de administración para un club de voleibol: alumnos, categorías, mensualidades con pago en línea (Flow), asistencia por encargados y portal del alumno.',
      technologies: ['Django', 'DRF', 'JWT', 'React', 'TypeScript', 'PostgreSQL'],
      status: 'En desarrollo',
    },
    {
      name: 'ChanclasWarden',
      description:
        'Gestor de contraseñas zero-knowledge al estilo Bitwarden: la bóveda se cifra en el equipo del usuario. Funciona como app de escritorio (SQLite) o como servidor + web con sincronización.',
      technologies: ['NestJS', 'Prisma', 'React', 'Electron', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Obstetricia',
      description:
        'Seguimiento de salud obstétrica con roles (admin, profesional, paciente): ciclos, control de embarazo e ingestas anticonceptivas. Reescritura completa desde Spring Boot a NestJS + React.',
      technologies: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'Tailwind'],
    },
    {
      name: 'Taxímetro',
      description:
        'App móvil que mide distancia y tiempo de espera por GPS en tiempo real y calcula la tarifa con valores configurables. Incluye seguimiento en segundo plano y botón de emergencia.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'GPS'],
    },
    {
      name: 'Green Web Dev',
      description: 'Trabajo de título: herramienta para medir la huella de carbono de sitios web.',
      technologies: ['Node.js', 'Express', 'React', 'CO2.js'],
      repo: 'https://github.com/Trabajo-de-Titulo-Chala-Mancilla/greenwebdev',
    },
    {
      name: 'Concursos San Valentín',
      description: 'Plataforma de concursos con tareas en segundo plano.',
      technologies: ['Django', 'Vue.js', 'Redis', 'Celery', 'Docker'],
      repo: 'https://github.com/CaptainChala/concursos_san_valentin',
    },
    {
      name: 'Catálogo Automotriz',
      description: 'Catálogo web de vehículos.',
      technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Docker'],
      repo: 'https://github.com/CaptainChala/CatalogoAutomotriz',
    },
  ];
}
