import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { LeadsComponent } from './components/pipeline/leads/leads.component';

@NgModule({
  declarations: [
    AppComponent,
    PipelineComponent,
    LeadsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    DragDropModule,
    ScrollingModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
