import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "course-item",
  templateUrl: "./course-item.component.html",
  styleUrls: ["./course-item.component.css"]
})
export class CourseItemComponent implements OnInit {
  @Input() course1;

  constructor() {}

  ngOnInit() {}

  fontSizeSet() {
    return "20px";
  }
}
