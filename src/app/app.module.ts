import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './charts/text/text.component';
import { ListComponent } from './charts/list/list.component';
import { RadioComponent } from './charts/radio/radio.component';
import { MultipleSelectionComponent } from './charts/multiple-selection/multiple-selection.component';
import { NumberComponent } from './charts/number/number.component';
import { BooleanComponent } from './charts/boolean/boolean.component';
import { createCustomElement } from "@angular/elements";
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { CheckboxComponent } from './charts/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ListComponent,
    RadioComponent,
    MultipleSelectionComponent,
    NumberComponent,
    BooleanComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: false }}]
  ,bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("lr-dashboard", appElement);
  }
}
