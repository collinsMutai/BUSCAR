import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;                                  // declare like this

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
    .add({
      targets: '.an-1 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    }).add({
      targets: '.an-1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 3000
    });
    
    
    }
}
