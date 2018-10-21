import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Data } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private subject = new Subject<any>();

  sendData(message: Data) {
    this.subject.next({ message: message });
  }
  clearData() {
    this.subject.next();
  }
  getData(): Observable<Data> {
    return this.subject.asObservable();
  }
}
