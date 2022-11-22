import { Component, OnInit } from '@angular/core';
import { CreateUserGQL } from 'src/generated-types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private readonly createUserGql: CreateUserGQL) {}

  ngOnInit(): void {}

  signup({ email, password }: any) {
    this.createUserGql
      .mutate({ createUserData: { email, password } })
      .subscribe(() => {});
  }
}
