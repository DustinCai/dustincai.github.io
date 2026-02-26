import { Component } from '@angular/core';
import data from './footer.json'

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected config: any = data; 
}
