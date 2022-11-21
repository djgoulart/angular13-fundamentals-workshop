import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

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
    {
      id: '3',
      title: 'RXJS',
      description: 'Learn the fundamentals of RxJS',
      percentComplete: 15,
      favorite: true
    },
  ];
}
