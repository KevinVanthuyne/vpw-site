import {Component} from '@angular/core';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent {
  members = ['Iaakki', 'Benji', 'Sixtoe', 'Apophis']
}
