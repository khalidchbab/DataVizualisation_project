import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PagesRoutingModule } from "./pages-routing.module";
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GraphChartComponent } from './graph-chart/graph-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';



@NgModule({
  declarations: [
    PagesComponent,
    BarChartComponent,
    PieChartComponent,
    GraphChartComponent,
    BubbleChartComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule
  ]
})
export class PagesModule { }