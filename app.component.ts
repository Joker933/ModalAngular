import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projekt';

  public Rocco = false;
  public Panko = "";

  Kliknuti() {
    this.Rocco = !this.Rocco;
    document.getElementById("main1").style.display = "font: 200px";
  }

}
