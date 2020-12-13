import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatSelectModule} from "@angular/material/select";
import { MatInputModule} from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule} from "@angular/material/form-field";

const MaterialComponents = [
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule
]

/*
* This component is for importing and exporting material components
*
* */
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
