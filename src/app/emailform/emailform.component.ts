import { Component } from '@angular/core';
import {Userinfo} from "../userinfo";

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent {
  model = new Userinfo("","", "", "omkarbhattarai71@gmail.com", "")
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
