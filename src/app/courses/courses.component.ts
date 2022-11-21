import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';
import { CoursesService } from '../common/services/courses.service';

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
  courses: Course[] = [];


  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    //this.courses = this.coursesService.courses
    this.coursesService.all()
      .subscribe((result: Course[]) => this.courses = result)
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
