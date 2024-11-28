import { Component, computed, HostListener, input, signal } from '@angular/core';
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
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileView = window.innerWidth <= 600;
  }

  ngOnInit() {
    this.isMobileView = window.innerWidth <= 600;
  }

  toggleSidenav = computed(() => {
    return !this.isCollapsed();
  });

  logout() {
    console.log('User logged out');
  }

  isMobile() {
    return this.isMobileView;
  }
}
