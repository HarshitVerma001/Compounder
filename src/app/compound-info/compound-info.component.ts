import {
  Component
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CompoundDataService
} from '../service/compound-data.service'

@Component({
  selector: 'app-compound-info',
  templateUrl: './compound-info.component.html',
  styleUrls: ['./compound-info.component.css']
})
export class CompoundInfoComponent {
  info: any;

  constructor(private route: ActivatedRoute, private service: CompoundDataService, private router: Router) {
    const id = String(route.snapshot.paramMap.get('id'))
    service.getCompoundById(id).subscribe((data: any) => {
      this.info = data.data;
    })
  }

  updateCompound(data: any) {
    const compoundData = {
      CompoundName: this.info.CompoundName,
      CompoundDescription: data.CompoundDescription,
      ImageSource: this.info.ImageSource,
      ImageAttribution: this.info.ImageAttribution,
    }
    this.service.upsertCompound(compoundData).subscribe(() => {
      location.reload();
    });
  }

  deleteCompound() {
    this.service.deleteCompound(this.info.ID).subscribe((data) => {
      this.router.navigate(['/']);
    })
  }

}
