import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
})
export class Skills {
  groups = [
    { label: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C / C++'] },
    { label: 'Backend', items: ['NestJS', 'Prisma', 'Django / DRF', 'Spring Boot', 'Node.js / Express'] },
    { label: 'Frontend y móvil', items: ['React', 'Angular', 'Vue.js', 'React Native / Expo', 'Tailwind CSS', 'Electron'] },
    { label: 'Datos e infra', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Docker', 'Google Cloud Run', 'Supabase'] },
    { label: 'Herramientas', items: ['Git / GitHub', 'Jira', 'Figma'] },
    { label: 'Habilidades blandas', items: ['Comunicación efectiva', 'Solución de problemas', 'Atención al detalle', 'Manejo del tiempo'] },
  ];
}
