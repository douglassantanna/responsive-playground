import { SlicePipe } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  toggleSidenavEvent = output();
  userName: string = 'John Johnson';
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  profile() {
    console.log('Profile clicked');
  }

  settings() {
    console.log('Settings clicked');
  }

  logout() {
    console.log('Logout clicked');
  }
}
