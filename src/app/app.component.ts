import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faReceipt, faCalendarCheck, faClock, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
