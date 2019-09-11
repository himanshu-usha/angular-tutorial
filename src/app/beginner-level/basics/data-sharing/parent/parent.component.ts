import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  
  //Parent to child data sharing via @Input
  parentMessage = "Gob bless you";

  // Child to Parent data sharing via @ViewChild
  @ViewChild(ChildComponent, { static: false }) child;
  message: string;

  ngAfterViewInit() {
    this.message = this.child.shareData;
  }

  // Child to Parent data sharing via @Output
  messageViaOutputParent: string;

  receiveMessage($event) {
    this.messageViaOutputParent = $event;
  }
}
