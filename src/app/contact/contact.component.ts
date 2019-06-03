import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contacts : Contact[]=[
    new Contact("LinkedIN", "https://www.linkedin.com/in/himanshu-satija-002940128/", "/assets/image/pic2.jpeg"),
    new Contact("Gmail", "mailto:Hunnysatija01@gmail.com", "/assets/image/gmail.jpeg"),
    new Contact("Facebook", "https://www.facebook.com/himanshu.satija.71", "/assets/image/fb.jpeg"),
    new Contact("Phone", "/assets/image/phone.jpeg", "/assets/image/phone.jpeg"),
    new Contact("Whatsapp", "https://api.whatsapp.com/send?phone= 917742986934&text=Hello Himanshu this side", "/assets/image/whatsaap.jpeg"),
    new Contact("InstaGram", "https://www.instagram.com/hdsatija/", "/assets/image/instagram.jpeg"),

  ];
  constructor() { }

  ngOnInit() {
  }

}
