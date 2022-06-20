import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements AfterViewInit {

  @Input() title: string = '';
  @Input() body: string = '';
  @Input() link: string = '';

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator')
  truncator!: ElementRef<HTMLElement> ;
  @ViewChild('bodyText')
  bodyText!: ElementRef<HTMLElement>;




  constructor(private renderer:Renderer2) { 
    
  }

  ngOnInit(): void {
    
  }

ngAfterViewInit(): void{
//Work out if there is a text overflow and if not, then hide the trucator

let style = window.getComputedStyle(this.bodyText.nativeElement, null);
let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
  this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block'); 
}else{
  this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none'); 
}
}
onXButtonClick(){
  //Inform app that x button has been clicked

  this.deleteEvent.emit();
}

}
