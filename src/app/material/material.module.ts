import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    DragDropModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    DragDropModule,
    MatTooltipModule
  ]
})
export class MaterialModule {

}
