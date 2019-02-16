import { Injectable } from "@angular/core";

declare let $: any;

@Injectable({
  providedIn: "root"
})
export class FcalService {
  constructor() {}

  fullCalendar(id) {
    console.log("#" + id);
    $("#" + id).fullCalendar({});
  }
}
