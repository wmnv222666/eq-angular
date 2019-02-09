import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { TestappComponent } from './test/testapp/testapp.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseItemComponent } from './course/course-item/course-item.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, TestappComponent, CourseListComponent, CourseItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
