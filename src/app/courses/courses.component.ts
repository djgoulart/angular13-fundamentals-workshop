import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = emptyCourse;
  originalTitle: string;

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of React',
      percentComplete: 95,
      favorite: true
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    if(course) {
      this.selectedCourse = {...course};
      this.originalTitle = course.title;
    }
  }

  deleteCourse(courseId) {
    if(courseId) {
      console.log('DELETE COURSE', courseId)
    }
  }

  reset(){
    this.selectCourse({...emptyCourse});
  }

  saveCourse(course){
    if(course) {
      console.log('SAVED COURSE', course)
    }
  }
}
