import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { Task } from './tasks.model';
import { map } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pagination';
  protected tasks!: Task[];
  protected paginatedTasks!: Task[];
  protected currentPage = 1;
  protected pageSize = 10;
  protected totalPages!: number;

  #apiService = inject(ApiService);

  ngOnInit(): void {
    this.#apiService.getTaks().subscribe((tasks) => {
      this.tasks = tasks;
    this.totalPages = Math.ceil(this.tasks.length / this.pageSize);

      this.updatePaginatedTasks();
    });
  }

  updatePaginatedTasks(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedTasks = this.tasks.slice(startIndex, startIndex + this.pageSize);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedTasks();
  }
}


