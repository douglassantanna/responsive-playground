import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'side-nav-project-ng-18';
  onToggleSidenav = signal(false);
  toggleSidenavEvent() {
    this.onToggleSidenav.set(!this.onToggleSidenav());
  };
}
