import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesComponent } from "./services.component";
import { ServicesRoutingModule } from "./services-routing.module";
import { MaterialModule } from "../shared/material/material.module";
import { ServiceCardComponent } from "./service-card/service-card.component";
import { ServiceFormComponent } from "./service-form/service-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ServicesComponent, ServiceCardComponent, ServiceFormComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ServicesModule {}
