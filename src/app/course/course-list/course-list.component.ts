import { Component, OnInit } from "@angular/core";

@Component({
  selector: "course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  name = "angular";
  size = 6;
  instructor = "peter";
  hours = 3;

  course1 = {
    name: "angular",
    size: 3,
    instructor: "peter",
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  };

  courses = [
    {
      name: "angular lvl 1",
      size: 6,
      instructor: "peter",
      hours: 3,
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    },
    {
      name: "angular lvl 2",
      size: 12,
      hours: 3
    },
    {
      name: "angular lvl 3",
      size: 12,
      instructor: "peter",
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    },
    {
      name: "angular lvl 4",
      instructor: "peter",
      movie: {
        "favorite movie": "Shawshank Redemption",
        image: "https://via.placeholder.com/100"
      }
    }
  ];

  hideOrNot() {
    return true;
  }
}
