import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption= 'receipe';

  onNavigate(feature) {
    this.selectedOption = feature;
    console.log(feature);
  }
}
