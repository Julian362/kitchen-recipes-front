import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private frm: FormBuilder,
    private readonly delegate: Delegate,
    private readonly swal: SwalService
  ) {}

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
      error: (err) => {
        this.swal.toFire('Error', err.message, 'error');
      },
      complete: () => {
        this.swal.toFire('Success', 'Ingrediente Creado', 'success');
        this.form.reset();
      },
    });
  }
}
