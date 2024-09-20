import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;                                  

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  offices = [
    { name: 'MWEMBE TAYARI OFFICE 1', phone: '0717073333/0731333888' },
    { name: 'MWEMBE TAYARI OFFICE 2', phone: '0702555005' },
    { name: 'COURIER MOMBASA OFFICE', phone: '0798222002/010010000' },
    { name: 'BONDENI OFFICE', phone: '0114500555' },
    { name: 'CHANGAMWE OFFICE', phone: '0793666006' },
    { name: 'MARIAKANI OFFICE', phone: '0759000101' },
    { name: 'NYALI OFFICE', phone: '0752000555' },
    { name: 'BAMBURI OFFICE', phone: '0790616151' },
    { name: 'UTANGE/MAJAONI OFFICE', phone: '0112500555' },
    { name: 'MTWAPA OFFICE', phone: '0792100100' },
    { name: 'KILIFI OFFICE', phone: '0717072020' },
    { name: 'TIMBONI OFFICE', phone: '0711505500' },
    { name: 'MALINDI OFFICE', phone: '0711500888/0791202020' },
    { name: 'VOI OFFICE', phone: '0799999011' },
    { name: 'MACHAKOS JUNCTION OFFICE', phone: '0711515115' },
    { name: 'MLOLONGO OFFICE', phone: '0113555005' },
    { name: 'NAIROBI OFFICE TOWN', phone: '0718127350' },
    { name: 'NAIROBI OFFICE PARCEL', phone: '0790505050' },
    { name: 'SOUTH C OFFICE', phone: '0711502626' },
    { name: 'EASTLEIGH OFFICE', phone: '0790606060' },
    { name: 'INDUSTRIAL AREA OFFICE', phone: '' },
    { name: 'PRESTIGE OFFICE', phone: '0741555005' },
    { name: 'THIKA OFFICE', phone: '0750010101' },
    { name: 'MAKONGENI OFFICE', phone: '0703305555' },
    { name: 'NAKURU OFFICE', phone: '0717027770' },
    { name: 'GILGIL OFFICE', phone: '0741555666' },
    { name: 'KISUMU OFFICE', phone: '0722584333' },
    { name: 'BUSIA OFFICE', phone: '0104972075' },
    { name: 'ELDORET OFFICE', phone: '0717078855' },
    { name: 'MALABA OFFICE', phone: '0758001110' },
    { name: 'KAMPALA OFFICE', phone: '' },
    { name: 'MINJILA OFFICE', phone: '0743110001' },
    { name: 'KIBAONI OFFICE', phone: '0790110001' },
    { name: 'MPEKETONI OFFICE', phone: '0737666333' },
    { name: 'WITU OFFICE', phone: '0795220002' },
    { name: 'HINDI OFFICE', phone: '0114110001' },
    { name: 'MOKOWE OFFICE', phone: '0740220002' },
    { name: 'LAMU OFFICE', phone: '0716500555' },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.an-1');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.an-1 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.an-1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 3000,
      });
  }
}
