import { Component, Input, OnInit } from "@angular/core";
import { Service } from "../services.component";
import { MatDialog } from "@angular/material/dialog";
import { ServiceFormComponent } from "../service-form/service-form.component";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.scss"],
})
export class ServiceCardComponent implements OnInit {
  @Input() service: Service;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  editService() {
    const dialogRef = this.dialog.open(ServiceFormComponent, {
      maxHeight: "95vh",
      width: "95%",
      minHeight: "95vh",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      data: { selectedService: this.service },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== "canceled") {
        console.log("Put get all function here");
      }
    });
  }
}
