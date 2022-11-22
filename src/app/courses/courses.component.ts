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
    this.fetchCourses();
  }

  reset(){
    this.selectCourse({...emptyCourse});
  }

  fetchCourses() {
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
      this.coursesService.find(courseId)
        .subscribe((result:Course) => {
          if(result.id) {
            this.coursesService.delete(courseId)
              .subscribe(result => this.fetchCourses());
          }
        })
    }
  }


  saveCourse(course){
    if(course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this.coursesService.create(course)
      .subscribe(result => this.fetchCourses());
  }

  updateCourse(course){
    this.coursesService.update(course)
      .subscribe(result => this.fetchCourses());
  }
}
