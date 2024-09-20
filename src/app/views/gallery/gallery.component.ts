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
      src: '../../../assets/Banner/Buscar Banner 400px by 1600px-01.png',
      alt: 'Image 1',
    },
    {
      src: '../../../assets/Banner/Buscar Web Banners 900px by 400px-01.png',
      alt: 'Image 2',
    },
    {
      src: '../../../assets/Banner/Buscar Banner 400px by 1600px-01.png',
      alt: 'Image 3',
    },
    {
      src: '../../../assets/Banner/Buscar Banner 400px by 1600px-01.png',
      alt: 'Image 4',
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
