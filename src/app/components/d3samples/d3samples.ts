import {bootstrap}  from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {enableProdMode} from '@angular/core'
//import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts'
import {nvD3} from 'ng2-nvd3/lib/ng2-nvd3.ts'
import {ChartTypes, AllOptions, AllData} from './defs'
import {ChartSelector} from './chart-selector'

@Component({
  selector: 'd3samples',
  directives: [nvD3, ChartSelector],
  /*
  template: `
  <div>
    <div>Chart type: <chart-selector (select)="selectType($event)"></chart-selector></div>
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  `,
  */
  templateUrl: './d3samples.html'
})

export class D3Samples {
  options;
  data;
  chartType;

  selectType(e){
    this.chartType = e;
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }

  ngOnInit() {

  }

}
/*
enableProdMode();
bootstrap(Main);
*/