import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutsideElement: EventEmitter<MouseEvent>;

  constructor(private elementRef: ElementRef) {
    this.clickOutsideElement = new EventEmitter<MouseEvent>();
  }

  // Ecuchando el evento click en cualquier parte del documento
  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Si existe el elemento, y NO pertenece al elemento en si, para que se escuche el evento en otros elementos
    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)){
      console.log("Click afuera del buscador");

      this.clickOutsideElement.emit(event);
    }
  }

}
