import {Component, Input, ViewChild, AfterViewInit} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import {ChartDataItem} from '../../models/chart.model';

@Component({
  selector: 'chart-type-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {

  public pieIcon: string = "data:image/png;base64,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";
  public barIcon: string = "data:image/png;base64,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";
  public reloadIcon : string ="data:image/png;base64,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";
  public structure: any;
  public isPie: boolean = true;
  public dataSet: Array<ChartDataItem> = [];
  public isReady: boolean = false;
  @Input('structure')
  public set Structure(_structure: any) {
    this.structure = _structure;
  }
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLabels = [];
  public pieChartDatasets = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  ngAfterViewInit(): void {
    console.log(this.structure);
    this.isReady = false;
    this.prepareDataSet();
    this.setPieChart();
    this.isReady = true;
  }
  prepareDataSet() {
    var fields = this.structure.fieldOptions;
    for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
      var dataItem = new ChartDataItem();
      dataItem.key = fields[fieldIndex].value;
      dataItem.label = fields[fieldIndex].label;
      dataItem.frequancy = 0;
      this.dataSet.push(dataItem);
    }
    var data = this.structure.data;
    for (let dataElementIndex = 0; dataElementIndex < data.length; dataElementIndex++) {
      (data[dataElementIndex].value as Array<any>).forEach((item) => {
        this.dataSet.filter(field => field.key === item)[0].frequancy++;
      });
    }
  }
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {data: [], label: 'Series A'}
    ]
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };
  preparePieChartData() {
    this.pieChartLabels = [];
    this.pieChartDatasets = [];
    var _data = {
      data: []
    };
    this.dataSet.forEach((item) => {
      // @ts-ignore
      this.pieChartLabels.push(item.label);
      // @ts-ignore
      _data.data.push(item.frequancy);
    })
    // @ts-ignore
    this.pieChartDatasets.push(_data);
  }
  prepareBarChartData() {
    this.barChartData.labels = [];
    this.barChartData.datasets[0].data = [];
    var _data = {
      data: []
    };
    this.dataSet.forEach((item) => {
      // @ts-ignore
      this.barChartData.labels.push(item.label);
      // @ts-ignore
      this.barChartData.datasets[0].data.push(item.frequancy);
    })
    // @ts-ignore
    this.pieChartDatasets.push(_data);
  }
  setPieChart() {
    this.isReady = false;
    this.preparePieChartData();
    this.isPie = true;
    this.isReady = true;
  }
  setBarChart() {
    this.isReady = false;
    this.prepareBarChartData();
    this.isPie = false;
    this.isReady = true;
  }
}
