import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {TASK} from '../../mock-task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = TASK[0]
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  @Output() onToogleReminder: EventEmitter<Task> = new EventEmitter()
  
  faTimes = faTimes; 
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToogle(task:Task){
    this.onToogleReminder.emit(task);
  }
}
