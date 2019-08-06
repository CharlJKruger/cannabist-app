import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'grow-create', loadChildren: './grow-create/grow-create.module#GrowCreatePageModule' },
  { path: 'search-strain', loadChildren: './search-strain/search-strain.module#SearchStrainPageModule' },  { path: 'env-create', loadChildren: './env-create/env-create.module#EnvCreatePageModule' },
  { path: 'strain-create', loadChildren: './strain-create/strain-create.module#StrainCreatePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
