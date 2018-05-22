import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'week-1',
  templateUrl: './week-1.component.html',
  styleUrls: ['./week-1.component.css']
})
export class Week1Component implements OnInit {
  @Input() day: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.day = params['day'];
    });
  }

}
