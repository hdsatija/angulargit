import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  Projects : Project[]=[
    new Project( "E commerce Website ( Using word press )","https://avonchemicals.com/word/" , "A Fully functional E commerce Website with all features like phone verification email verification , payment , order checkout , cart .", "/assets/image/poojas.png"),
   new Project("A company website", "http://avonchemicals.com", "A fully responsive website for a chemical company designed and developed by me." , "/assets/image/avon.png"),
    new Project("Blog for company Repotcard","https://reportcardapps.com/blog/", "A blog for company reportcard designed by me.", "/assets/image/blog.png"),
    new Project("Education website", "https://legatuacademy.com/" ,"on this i work with a team. This is made on laravel framework. I did Frontend work.", "/assets/image/lega.png"),
    new Project("Restaurant website","https://batraroom.000webhostapp.com/", "Develope a e-com website by me using php , mysql and bootstrap.", "/assets/image/batra.png"),
    new Project("Online Survey tool","https://himanshusatija.000webhostapp.com/" ,"Develope a online survey tool for collge ","/assets/image/survey.png"),
    new Project("Museums of india","/assets/image/muse.png ","Presently working on a website for all museums of india with ticket booking and so many features. it’s a hackathon project. All work done by me only." , "/assets/image/muse.png"),
    new Project("Dynamic Horizontal Stepper " , "/assets/image/stepper.png","A horizontal stepeer made by me and implemented on a laravel framework" , "/assets/image/stepper.png"),
    new Project("EMail Notification using sendfrid api", "/assets/image/emailapi.png" , "Sample mail is attached ", "/assets/image/emailapi.png")
  ];

  constructor() {}

  ngOnInit() {
  }
}
