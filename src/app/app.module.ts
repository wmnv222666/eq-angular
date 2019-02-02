import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { TestappComponent } from './test/testapp/testapp.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, TestappComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
