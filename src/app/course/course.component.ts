import { Component } from "@angular/core";

@Component({
  selector: "course-app",
  template: `
    <div class="course-app">
      <div>
        Hi! This is the course component!
      </div>
      <div>Course name: {{ name }}</div>
      <div>Instructor name: {{ instructor }}</div>
      <div>
        Max students: {{ size }} Total hours: {{ hours }} Total minutes:
        {{ hours * 60 }}
      </div>
    </div>
  `
})
export class CourseComponent {
  name = "angular";
  size = 6;
  instructor = "peter";
  hours = 3;

  course1 = {
    name: "angular",
    size: 6,
    instructor: "peter",
    hours: 3
  };
}
