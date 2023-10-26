import { Component, Input } from '@angular/core';

interface cardDetails{
  title:string;
  money:string;
  percent:string;
  theme:string;
  icon:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardData:cardDetails|undefined;

}
