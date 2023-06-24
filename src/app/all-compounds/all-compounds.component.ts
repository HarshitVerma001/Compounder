import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  CompoundDataService
} from '../service/compound-data.service'

@Component({
  selector: 'app-all-compounds',
  templateUrl: './all-compounds.component.html',
  styleUrls: ['./all-compounds.component.css']
})
export class AllCompoundsComponent {
  Compounds: any;
  allCompounds: number = 0;
  totalLength: any;
  pagination: number = 1;

  constructor(private router: Router, private service: CompoundDataService) {}

  ngOnInit() {
    this.fetchCompounds();
    console.warn(this.fetchCompounds());
  }

  fetchCompounds() {
    this.service.getCompounds(this.pagination).subscribe((res: any) => {
      this.Compounds = res.data.rows;
      this.allCompounds = res.data.count;
      console.warn("data in getAll is", res.data.count)
    });
  }

  getDetailedCompound = (id: string) => {
    const path: string[] = ['/compound'];
    path.push(id);
    this.router.navigate(path);
  }

  renderPage(event: number) {
    this.pagination = event;
    this.fetchCompounds();
  }

}
