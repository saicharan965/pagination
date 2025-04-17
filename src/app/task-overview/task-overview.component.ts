import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../tasks.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-overview',
  imports: [ FormsModule],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TaskOverviewComponent implements OnInit {
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

  goToPage(page: number | null): void {
    if (page != null && page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedTasks();
    }
  }
}
