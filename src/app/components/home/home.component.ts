import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, ElementRef, Renderer2 } from '@angular/core';

type Tab = "uploadFile" | "accession" | "sequence";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300) // Adjust the duration (in milliseconds) as needed
      ]),
      transition('* => void', [
        animate(300, style({ opacity: 0 })) // Adjust the duration (in milliseconds) as needed
      ])
    ])
  ]
})
export class HomeComponent {
  public selectedTab: Tab = "uploadFile";

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  scrollToTarget(type: string) {
    const targetElement = this.el.nativeElement.ownerDocument.getElementById(type);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
