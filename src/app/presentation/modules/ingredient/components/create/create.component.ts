import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delegate } from '@application/delegate';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(private frm: FormBuilder, private readonly delegate: Delegate) {}

  ngOnInit() {
    this.form = this.frm.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      photoUrl: ['', Validators.required],
    });
  }

  create() {
    this.delegate.toCreateIngredient();
    this.delegate.execute(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
