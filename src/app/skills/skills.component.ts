import { Component, OnInit } from '@angular/core';
import { skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills : skill[]=[
    new skill("Angular", "75"),
    new skill("JavaScript", "80"),
    new skill("Html", "90"),
    new skill("CSS", "90"),
    new skill("PhP", "90"),
    new skill("Jquery", "80"),
    new skill("Ajax", "70"),
    new skill("Bootstrap", "90"),
    new skill("C lang", "80"),
    new skill("C++", "80"),
    new skill("SQL", "90"),
    new skill("MySql", "90"),


  ];
  constructor() { }

  ngOnInit() {
  }

}
