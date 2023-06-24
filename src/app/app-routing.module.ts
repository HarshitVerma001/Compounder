import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AllCompoundsComponent
} from './all-compounds/all-compounds.component';
import {
  AddCompoundComponent
} from './add-compound/add-compound.component';
import {
  CompoundInfoComponent
} from './compound-info/compound-info.component';

const routes: Routes = [{
    path: '',
    component: AllCompoundsComponent
  },
  {
    path: 'add-compound',
    component: AddCompoundComponent
  },
  {
    path: 'compound/:id',
    component: CompoundInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
