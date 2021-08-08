import { CdkDragDrop,  moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PipelineCard } from 'src/app/models/pipeline-card';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
  search: string;
 
  captados: PipelineCard[];
  interesados: PipelineCard[];
  visitas: PipelineCard[];
  cotizaciones: PipelineCard[];
  negocios: PipelineCard[];
  reservas: PipelineCard[];
  iniciales: PipelineCard[];
  carpetas: PipelineCard[];
  ganados: PipelineCard[];
  perdidos: PipelineCard[];

  constructor() {
    //this.pipeline = new Pipeline();
    this.captados= [new PipelineCard(),new PipelineCard(),new PipelineCard(),new PipelineCard(),new PipelineCard()];
    this.interesados = [];
    this.visitas = [];
    this.cotizaciones = [];
    this.negocios = [];
    this.reservas = [];
    this.iniciales = [];
    this.carpetas = [];
    this.ganados = [];
    this.perdidos = [];
   }

  ngOnInit(): void {

  }
  onLoadPipeline():void{

  }
  onAddNewProspect():void{

  }
  drop(event: CdkDragDrop<PipelineCard[]>):void{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      /*transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);*/
    }
  }
}
