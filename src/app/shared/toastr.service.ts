import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable({
  providedIn: "root"
})
export class ToastrService {
  constructor() {}

  success(message, title?) {
    toastr.success(message, title);
  }

  info(message, title?) {
    toastr.info(message, title);
  }

  warning(message, title?) {
    toastr.warning(message, title);
  }

  error(message, title?) {
    toastr.error(message, title);
  }
}
