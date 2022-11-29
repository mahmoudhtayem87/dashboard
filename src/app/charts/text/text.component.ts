import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import {ChartDataItem} from '../../models/chart.model';

@Component({
  selector: 'chart-type-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements AfterViewInit {

  public structure: any;
  public dataSet: Array<ChartDataItem> = [];
  public isReady: boolean = false;
  @Input('structure')
  public set Structure(_structure: any) {
    this.structure = _structure;
  }

  ngAfterViewInit(): void {

  }

  public get Data()
  {
    return this.structure.data;
  }

}
