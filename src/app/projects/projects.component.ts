import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects = [
    {
      titre: 'Extranet',
      type: 'Extranet immobilier',
      legende: '',
      description: '',
      technos: ['Angular 9', 'SCSS', 'Zend Framework 2', 'MySQL', 'Docker'],
      date: '30/06/2021'
    },
    {
      titre: 'Portfolio 1.0',
      type: 'Présentation de projets',
      legende: '',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      date: '09/02/2021'
    },
    {
      titre: 'Kraken Play',
      type: 'E-Commerce',
      legende: 'Projet de diplôme de formation',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'PHP', 'Framework perso', 'MySQL'],
      date: '03/08/2020'
    },
    {
      titre: 'Restaurant',
      type: '',
      legende: '',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'PHP', 'Framework 3WA', 'MySQL'],
      date: '21/03/2020'
    },
    {
      titre: 'Blog',
      type: '',
      legende: '',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      date: '28/02/2020'
    },
    {
      titre: 'Velib',
      type: '',
      legende: '',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'Ajax', 'PHP'],
      date: '22/02/2020'
    },
    {
      titre: 'Painter',
      type: 'Peinture digitale',
      legende: '',
      description: '',
      technos: ['HTML', 'CSS', 'JavaScript', 'Canva'],
      date: '05/02/2020'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
