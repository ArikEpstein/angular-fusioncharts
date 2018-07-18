import { Component, AfterViewInit} from '@angular/core';
import fcDemos from '../samplecode';
import * as FusionCharts from 'fusioncharts';
declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex10.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex10 {
    demoId = 'ex10';
    sampleCode = fcDemos;
    dataSource = {
        "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion",
        },
        "data": [{
          "label": "Venezuela",
          "value": "290"
        }, {
          "label": "Saudi",
          "value": "260"
        }, {
          "label": "Canada",
          "value": "180"
        }, {
          "label": "Iran",
          "value": "140"
        }, {
          "label": "Russia",
          "value": "115"
        }, {
          "label": "UAE",
          "value": "100"
        }, {
          "label": "US",
          "value": "30"
        }, {
          "label": "China",
          "value": "30"
        }]
    };

    barDataSource = {
      "chart": {
        "caption": "Lead sources by industry",
        "yAxisName": "Number of Leads",
        "alignCaptionWithCanvas": "0",
        "plotToolText": "<b>$dataValue</b> leads received",
        "theme": "fusion"
      },

      "data": [{
          "label": "Travel & Leisure",
          "value": "41"
        },
        {
          "label": "Advertising/Marketing/PR",
          "value": "39"
        },
        {
          "label": "Other",
          "value": "38"
        },
        {
          "label": "Real Estate",
          "value": "32"
        },
        {
          "label": "Communications/Cable/Phone",
          "value": "26"
        },
        {
          "label": "Construction",
          "value": "25"
        },
        {
          "label": "Entertainment",
          "value": "25"
        },
        {
          "label": "Staffing Firm/Full Time/Temporary",
          "value": "24"
        },
        {
          "label": "Transportation/Logistics",
          "value": "23"
        },
        {
          "label": "Utilities",
          "value": "22"
        },
        {
          "label": "Aerospace/Defense Products",
          "value": "18"
        },
        {
          "label": "Banking/Finance/Securities",
          "value": "16"
        },
        {
          "label": "Consumer Products - Non-Durables",
          "value": "15"
        },
        {
          "label": "Distribution",
          "value": "13"
        },
        {
          "label": "Education",
          "value": "12"
        },
        {
          "label": "Health Products & Services",
          "value": "11"
        },
        {
          "label": "Hospitality & Hotels",
          "value": "10"
        },
        {
          "label": "Non-Business/Residential",
          "value": "6"
        },
        {
          "label": "Pharmaceutical",
          "value": "4"
        },
        {
          "label": "Printing & Publishing",
          "value": "1"
        },
        {
          "label": "Professional Services",
          "value": "1"
        },
        {
          "label": "VAR/ISV",
          "value": "1"
        },
        {
          "label": "Warranty Administrators",
          "value": "1"
        }
      ]
    };

    changeBackgroundColor = function () {
        this.dataSource.chart.bgColor = "#efefef";
    };

    changeCaptionTextAlignment = function () {
        this.dataSource.chart.captionAlignment = "left";
    };

    getChartInstance(e){
      
      
    }

    exportChart(e){
      
      FusionCharts.batchExport({
        exportFormat:'pdf'
      })
    }

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
