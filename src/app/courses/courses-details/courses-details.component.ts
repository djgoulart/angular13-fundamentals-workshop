import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent {
  currentCourse: Course;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set course(value: Course) {
    if(!value) return;

    this.currentCourse = {...value};
    this.originalTitle = value.title;
  };

  saveCourse(course: Course) {
    this.saved.emit(course);
    this.cancelled.emit();
  }

  cancelCourse() {
    this.cancelled.emit();
  }

}
