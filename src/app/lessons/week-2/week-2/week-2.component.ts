import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'week-2',
  templateUrl: './week-2.component.html',
  styleUrls: ['./week-2.component.css']
})
export class Week2Component implements OnInit {
  @Input() day: number;
  @Output() scrolledTo = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.day = params['day'];
    });
  }

  scrollIntoView(event) {
    this.scrolledTo.emit(event);
  }

}
