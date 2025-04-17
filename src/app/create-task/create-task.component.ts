import { Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Task } from '../tasks.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {

  #apiService = inject(ApiService);

  protected createTaskFormGroup: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(75)]),
    completed: new FormControl(false),
    userId: new FormControl(1),
    taskId: new FormControl(0)
  })

  protected createTask() {
    const value = this.createTaskFormGroup.getRawValue()
    console.log(value)
    this.#apiService.createTask(value).subscribe((response) => {
    })
  }
}
