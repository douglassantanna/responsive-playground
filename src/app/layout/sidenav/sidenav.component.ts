import { Component, computed, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styles: ``
})
export class SidenavComponent {
  isCollapsed = input.required<boolean>();

  toggleSidenav = computed(() => {
    return !this.isCollapsed();
  });

  logout() {
    console.log('User logged out');
  }
}
