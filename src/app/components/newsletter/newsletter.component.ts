import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  readonly emailForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email])
  })
  constructor(private router: Router) {

  }
  submit() {
    console.log("email")
    if (this.emailForm.valid) {
      this.router.navigate(['thanks'])
    }
  }
}
