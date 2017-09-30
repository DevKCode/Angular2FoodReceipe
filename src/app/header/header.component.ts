import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() activeStatus = false;
  @Input() activeStatus1 = false;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(selectType: string) {
    this.featureSelected.emit(selectType);

    if (selectType === 'receipe') {
      this.activeStatus = true;
      this.activeStatus1 = false;
    } else {
      this.activeStatus1 = true;
      this.activeStatus = false;
    }

  }

}
