import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onHandleSignUp(formData) {
    const user = await this.authService.signUpWithEmail(
      formData.displayName,
      formData.email,
      formData.password
    );

    if (user) {
      this.router.navigate(['/posts']);
    }
  }
}
