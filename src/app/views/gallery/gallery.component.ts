import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class GalleryComponent implements OnInit {
  images = [
    {
      src: '../../../assets/Buscar Bus Images/Buscar Kenya luxury buses.jpg',
      alt: 'Buscar Kenya luxury buses',
    },
    {
      src: '../../../assets/Buscar Bus Images/Buscar Malindi to Nairobi.jpg',
      alt: 'Buscar Malindi to Nairobi',
    },
    {
      src: '../../../assets/Buscar Bus Images/Buscar Mombasa to Nairobi.jpg',
      alt: 'Buscar Mombasa to Nairobi',
    },
    {
      src: '../../../assets/Buscar Bus Images/Mombasa bus travel.jpg',
      alt: 'Mombasa bus travel',
    },
    {
      src: '../../../assets/Buscar Bus Images/Malindi bus services.jpg',
      alt: 'Malindi bus services',
    },
    {
      src: '../../../assets/Buscar Bus Images/Kampala bus connection.jpg',
      alt: 'Kampala bus connection',
    },
    {
      src: '../../../assets/Buscar Bus Images/Kenya to Uganda bus travel.jpg',
      alt: 'Kenya to Uganda bus travel',
    },
    {
      src: '../../../assets/Buscar Bus Images/Buscar Nairobi contact.jpg',
      alt: 'Buscar Nairobi contact',
    },
    {
      src: '../../../assets/Buscar Bus Images/Mombasa Buscar office.jpg',
      alt: 'Mombasa Buscar office',
    },
  ];

  selectedImageIndex: number | null = null;
  isModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  openModal(image: { src: string; alt: string }, index: number): void {
    this.selectedImageIndex = index;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.selectedImageIndex = null;
    this.isModalOpen = false;
  }

  prevImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.images.length) % this.images.length;
    }
  }

  nextImage(): void {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.images.length;
    }
  }
}
