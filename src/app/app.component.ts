import {Component, AfterViewInit, Input} from '@angular/core';
import {LiferayService} from "./services/liferay.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'dashboard';
  records : Array<any> = [];
  formStructure: Array<any> = [];
  formDocument: any;
  private _formId : number  = 0;
  public isLoading : boolean = false;

  get formId(): number {
    return this._formId;
  }

  @Input('formId')
  set formId(value: number) {
    this._formId = value;
  }

  constructor(public liferaySrv:LiferayService) {
  }

  ngAfterViewInit(): void {
    console.log("Rendering started...");
    this.loadFormData();
    console.log("Rendering finished...");
  }
  loadingSpinner()
  {
    this.isLoading = !this.isLoading;
  }
  async loadFormData()
  {
    this.loadingSpinner();
    this.formDocument = await this.liferaySrv.getFormById(this.formId);
    console.log(this.formDocument);
    var totalCountData = await this.liferaySrv.getFormRecordsCountById(this.formId);
    // @ts-ignore
    var records = await this.liferaySrv.getFormRecordsById(this.formId,totalCountData.totalCount);
    // @ts-ignore
    this.records = records.items;
    this.collectStructure(this.formDocument.structure);
    this.collectFeildsData(this.records);
    console.log(this.formStructure);
    this.loadingSpinner();
  }
  collectStructure(formDocument:any)
  {
    for (let pageIndex = 0 ; pageIndex < formDocument.formPages.length ; pageIndex++)
    {
      for (let fieldIdex = 0 ; fieldIdex < formDocument.formPages[pageIndex].formFields.length ; fieldIdex++)
      {
        var field = {
          label:formDocument.formPages[pageIndex].formFields[fieldIdex].label,
          key:formDocument.formPages[pageIndex].formFields[fieldIdex].name,
          type:formDocument.formPages[pageIndex].formFields[fieldIdex].inputControl,
          fieldOptions:formDocument.formPages[pageIndex].formFields[fieldIdex].formFieldOptions,
          data:[]
        };
        this.formStructure.push(field);
      }
    }
  }
  collectFeildsData(items:Array<any>)
  {
    for (let itemIndex = 0 ; itemIndex < items.length ; itemIndex++)
    {
      var item = items[itemIndex];
      if (item.formFieldValues.length === 0)
        continue;

      var values = item.formFieldValues;
      for (let fieldIndex = 0 ; fieldIndex < item.formFieldValues.length; fieldIndex++)
      {
        var currentKey = values[fieldIndex].name;
        if (values[fieldIndex].value.indexOf("[") === 0)
        {
          var currentObj = values[fieldIndex];
          currentObj.value = JSON.parse(currentObj.value);
          this.formStructure.filter(_field => _field.key === currentKey)[0].data.push(currentObj);
        }else
        this.formStructure.filter(_field => _field.key === currentKey)[0].data.push(values[fieldIndex]);
      }
    }
  }



}
