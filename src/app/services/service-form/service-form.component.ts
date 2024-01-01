import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Service } from "../services.component";

@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  styleUrls: ["./service-form.component.scss"],
})
export class ServiceFormComponent implements OnInit {
  serviceForm: FormGroup;
  selectedService: Service;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<Service>
  ) {}

  ngOnInit(): void {
    this.selectedService = this.data["selectedService"];
    this.setServiceForm(this.selectedService);
  }
  setServiceForm(service: Service) {
    this.serviceForm = this.fb.group({
      name: [service.name],
      description: [service.description],
      amount: [service.amount],
      length: [service.length],
      category: [service.category],
    });
  }

  parseString(input: string) {
    return parseInt(input);
  }
  onSubmit() {
    console.log(this.serviceForm);
  }
}
