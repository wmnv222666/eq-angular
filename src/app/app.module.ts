import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { TestappComponent } from "./test/testapp/testapp.component";
import { CourseListComponent } from "./course/course-list/course-list.component";
import { CourseItemComponent } from "./course/course-item/course-item.component";
import { CourseService } from "./shared/course-service.service";
import { DataService } from "./shared/data-service.service";
import { ToastrService } from "./shared/toastr.service";
import { FcalService } from "./shared/fcal.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TestappComponent,
    CourseListComponent,
    CourseItemComponent
  ],
  imports: [BrowserModule],
  providers: [CourseService, DataService, ToastrService, FcalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
