import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './components/footer/footer.component';
import {MissionPageComponent} from './pages/mission-page/mission-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { CircleContainerComponent } from './components/circle-container/circle-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    MissionPageComponent,
    LayoutComponent,
    MembersPageComponent,
    CircleContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
