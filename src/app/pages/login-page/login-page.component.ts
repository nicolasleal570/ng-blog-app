import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginCallback(formValues: { email: string; password: string }) {
    try {
      console.log('LOGIN CALLBACK');
      if (formValues) {
        const user = await this.authService.signInWithEmail(
          formValues.email,
          formValues.password
        );
        if (user) {
          this.router.navigate(['/posts']);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
