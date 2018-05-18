import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  day: number;

  constructor(private titleService: Title,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.day = params['day'];
      this.setTitle(`Day ${this.day}`);
    });
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
