import { Component } from '@angular/core';

import { Userinfo } from '../userinfo';

@Component({
  selector: 'app-userinfoform',
  templateUrl: './userinfoform.component.html',
  styleUrls: ['./userinfoform.component.css']
})
export class UserinfoformComponent {

  model = new Userinfo("omkarbhattarai", "Omkar","Bhattarai","omkarbhattarai71@gmail.com", "8450086842");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
