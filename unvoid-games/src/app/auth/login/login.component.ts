import { Component, Inject, OnInit } from '@angular/core';
import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly createUserGql: CreateUserGQL) {}

  ngOnInit(): void {}

  login({ email, password }: any) {
    console.log({ email, password });
    this.createUserGql
      .mutate({ createUserData: { email, password } })
      .subscribe(() => {});
  }
}
