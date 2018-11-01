import { Component } from '@angular/core';
import { MovieServiceService } from 'src/app/Services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _service:MovieServiceService)
  {
    
  }
  title = 'TP-VideoClub';
}
