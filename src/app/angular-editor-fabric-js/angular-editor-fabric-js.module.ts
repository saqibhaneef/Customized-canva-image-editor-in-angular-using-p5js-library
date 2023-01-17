import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import {FabricjsEditorComponent} from './angular-editor-fabric-js.component';



@NgModule({
  declarations: [
    FabricjsEditorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  exports:[
    FabricjsEditorComponent
  ]  
})
export class FabricjsEditorModule { }
