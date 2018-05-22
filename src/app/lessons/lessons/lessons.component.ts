import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  week: number;
  day: number;

  constructor(private titleService: Title,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.week = params['week'];
      this.day = params['day'];
      this.setTitle(`Angular 2+ (Day ${this.day})`);
    });
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
