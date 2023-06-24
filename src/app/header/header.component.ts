import {
  Component
} from '@angular/core';
import {
  NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Compounder';
  isMenuCollapsed = true;

  constructor(private router: Router) {}

  redirectHome() {
    this.router.navigate(['/']);
  }

  redirectToNew() {
    this.router.navigate(['/add-compound']);
  }
}
