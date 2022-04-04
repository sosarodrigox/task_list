import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'My Angular Task List';
  showAddTask:boolean = false;
  subcription?: Subscription;
  
  constructor(
    private uiService:UiService
  ) { 
    this.subcription = this.uiService.onToogle()
              .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toogleAddTask();
  }

}
