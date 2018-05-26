import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  week: number;
  day: number;

  constructor(private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {    
    this.route.params.subscribe((params) => {
      this.week = params['week'];
      this.day = params['day'];
      this.setTitle(`Angular 2+ (Day ${this.day})`);
    });

    // scroll to the top of the page on route change
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      this.scrollToTop();
    });
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollIntoView(event) {
    let item = document.getElementById(`${event}`);
    let doc = document.getElementsByTagName('body')[0];
    let count = item.offsetTop - doc.offsetTop - 180;
    window.scrollBy({ top: count, left: 0, behavior: 'smooth' });
  }

}