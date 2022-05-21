import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {MissionPageComponent} from "./pages/mission-page/mission-page.component";
import {MembersPageComponent} from "./pages/members-page/members-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'mission',
    component: MissionPageComponent
  },
  {
    path: 'members',
    component: MembersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
