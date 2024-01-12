import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoTabPage } from './nuevo-tab.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoTabPageRoutingModule {}
