import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  CompoundDataService
} from '../service/compound-data.service'

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css']
})
export class AddCompoundComponent {
  compound: any;

  constructor(private service: CompoundDataService, private router: Router) {}

  addCompound(data: any) {
    this.service.upsertCompound(data).subscribe((data) => {
      this.router.navigate(['/'])
    })
  }
}
