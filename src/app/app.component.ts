import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
import { mockChartData } from './components/stackedBarChart'
import { chartData } from './components/barChart'
import { DataService } from './services/data/data.service';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dashboard';
  timer = interval(40000);
  subscription: Subscription;

  dataService: DataService
  subject: any = {};
  courses: any = {}
  stackedBarchartConfig = mockChartData.configData;
  barChartConfig = chartData.configData

  constructor(dataService: DataService) {
    this.dataService = dataService
  }

  ngOnInit() {
    this.subject.chartOptions = _.get(this.stackedBarchartConfig, 'options') || { responsive: true };
    this.subject.chartColors = _.get(this.stackedBarchartConfig, 'colors') || ['#024F9D'];
    this.subject.chartType = _.get(this.stackedBarchartConfig, 'chartType')
    this.subject.legend = (_.get(this.stackedBarchartConfig, 'legend') === false) ? false : true;


    this.courses.chartOptions = _.get(this.barChartConfig, 'options') || { responsive: true };
    this.courses.chartColors = _.get(this.barChartConfig, 'colors') || ['#024F9D'];
    this.courses.chartType = 'bar'
    this.courses.legend = (_.get(this.barChartConfig, 'legend') === false) ? false : true;
    this.courses.chartLabels = ["Java", "C++", "React", "Python", "Data Structure"];
    this.getStackedBarChartValue()
    this.getBarChartValue()

    this.subscription = this.timer.subscribe(val => {
      this.getStackedBarChartValue()
      this.getBarChartValue()
    });
  }

  getStackedBarChartValue() {

    const reqParm = {
      url: '/school/getChart'
    }
    this.dataService.get(reqParm).subscribe(res => {
      console.log(res)
      this.subject.chartLabels = res.chartLabels
      this.subject.datasets = res.datasets
    })
  }

  getBarChartValue() {
    const reqParm = {
      url: '/course/getChart'
    }
    this.dataService.get(reqParm).subscribe(res => {
      console.log(res)
      this.courses.chartLabels = res.chartLabels
      this.courses.datasets = res.datasets
    })

    // this.courses.datasets = [
    //   {
    //     barPercentage: 1,
    //     barThickness: 20,
    //     maxBarThickness: 20,
    //     minBarLength: 2, data: [10, 2, 40, 10, 10], label: 'Number Of Teachers completed Courses', stack: '1', 'backgroundColor': '#f6c23e'
    //   }
    // ];

  }

}
