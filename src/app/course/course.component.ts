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

      <div>Course Object</div>
      <div>Course name: {{ course1.name }}</div>
      <div>Instructor name: {{ course1.instructor }}</div>
      <div>
        Max students: {{ course1.size }} Total hours: {{ course1.hours }} Total
        minutes:
        {{ course1.hours * 60 }}
      </div>
      <div>
        Favorite Movie: {{ course1.movie["favorite movie"] }}
        <img [src]="course1.movie.image" />
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
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  };
}
