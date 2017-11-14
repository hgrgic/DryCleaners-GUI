import { Component, OnInit } from '@angular/core';
import {PermissionService} from "angular2-permission/dist";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  constructor(private permissionService: PermissionService) {
    this.permissionService.add('Employee'); //TODO: Poziv iz keycloaka za rolu?
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
