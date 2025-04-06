import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.scss'],
})
export class TempformComponent implements OnInit {
  constructor() {}

  @ViewChild('signUpform') signUpform!: NgForm;
  ngOnInit(): void {}

  sumbitonclick() {
    console.log(this.signUpform.value);

    this.signUpform.reset();
  }
}
