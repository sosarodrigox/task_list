import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  task: Task[] = [];
  
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    //Like promise
    this.taskService.getTask().subscribe((tasks)=>(
      this.task = tasks
    ));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(
      ()=>(
      this.task = this.task.filter((t)=> t.id !== task.id)
    ))
  }

  toogleReminder(task:Task){
    task.reminder = !task.reminder
    console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
