import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //Parent to child data sharing via @Input
  @Input() childMessage: string;

  //Child to Parent data sharing via @ViewChild
  shareData ="This is used to share any info to parent statically.";

  //Child to Parent data sharing via @Output
  @Output() messageEvent = new EventEmitter<string>();
  messageViaOutputChild = "Thank you!!";
  sendMessage() {
    this.messageEvent.emit(this.messageViaOutputChild);
  }
}
