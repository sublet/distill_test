var RockinChart, RockinForm, json_data, rockin_form;

json_data = {
  "categorized_domain_requests": [
    {
      "summary_date": "2014-12-05",
      "human_total": 1011,
      "good_bot_total": 23,
      "bad_bot_total": 12842,
      "whitelist_total": 0,
      "overall_total": 13876
    }, {
      "summary_date": "2014-12-06",
      "human_total": 339,
      "good_bot_total": 44,
      "bad_bot_total": 12810,
      "whitelist_total": 0,
      "overall_total": 13193
    }, {
      "summary_date": "2014-12-07",
      "human_total": 329,
      "good_bot_total": 32,
      "bad_bot_total": 12768,
      "whitelist_total": 0,
      "overall_total": 13129
    }, {
      "summary_date": "2014-12-08",
      "human_total": 807,
      "good_bot_total": 17,
      "bad_bot_total": 12786,
      "whitelist_total": 0,
      "overall_total": 13610
    }, {
      "summary_date": "2014-12-09",
      "human_total": 969,
      "good_bot_total": 30,
      "bad_bot_total": 12764,
      "whitelist_total": 0,
      "overall_total": 13763
    }, {
      "summary_date": "2014-12-10",
      "human_total": 985,
      "good_bot_total": 22,
      "bad_bot_total": 12666,
      "whitelist_total": 0,
      "overall_total": 13673
    }, {
      "summary_date": "2014-12-11",
      "human_total": 952,
      "good_bot_total": 21,
      "bad_bot_total": 12766,
      "whitelist_total": 0,
      "overall_total": 13739
    }, {
      "summary_date": "2014-12-12",
      "human_total": 866,
      "good_bot_total": 28,
      "bad_bot_total": 12762,
      "whitelist_total": 0,
      "overall_total": 13656
    }, {
      "summary_date": "2014-12-13",
      "human_total": 267,
      "good_bot_total": 26,
      "bad_bot_total": 12710,
      "whitelist_total": 0,
      "overall_total": 13003
    }, {
      "summary_date": "2014-12-14",
      "human_total": 300,
      "good_bot_total": 30,
      "bad_bot_total": 12757,
      "whitelist_total": 0,
      "overall_total": 13087
    }, {
      "summary_date": "2014-12-15",
      "human_total": 1979,
      "good_bot_total": 30,
      "bad_bot_total": 8230,
      "whitelist_total": 0,
      "overall_total": 10239
    }, {
      "summary_date": "2014-12-16",
      "human_total": 985,
      "good_bot_total": 28,
      "bad_bot_total": 244,
      "whitelist_total": 0,
      "overall_total": 1257
    }, {
      "summary_date": "2014-12-17",
      "human_total": 961,
      "good_bot_total": 29,
      "bad_bot_total": 286,
      "whitelist_total": 0,
      "overall_total": 1276
    }, {
      "summary_date": "2014-12-18",
      "human_total": 1577,
      "good_bot_total": 17,
      "bad_bot_total": 2733,
      "whitelist_total": 0,
      "overall_total": 4327
    }, {
      "summary_date": "2014-12-19",
      "human_total": 782,
      "good_bot_total": 23,
      "bad_bot_total": 14884,
      "whitelist_total": 0,
      "overall_total": 15689
    }, {
      "summary_date": "2014-12-20",
      "human_total": 289,
      "good_bot_total": 29,
      "bad_bot_total": 14731,
      "whitelist_total": 0,
      "overall_total": 15049
    }, {
      "summary_date": "2014-12-21",
      "human_total": 285,
      "good_bot_total": 24,
      "bad_bot_total": 14704,
      "whitelist_total": 0,
      "overall_total": 15013
    }, {
      "summary_date": "2014-12-22",
      "human_total": 740,
      "good_bot_total": 21,
      "bad_bot_total": 13631,
      "whitelist_total": 0,
      "overall_total": 14392
    }, {
      "summary_date": "2014-12-23",
      "human_total": 867,
      "good_bot_total": 27,
      "bad_bot_total": 12517,
      "whitelist_total": 0,
      "overall_total": 13411
    }, {
      "summary_date": "2014-12-24",
      "human_total": 572,
      "good_bot_total": 21,
      "bad_bot_total": 299,
      "whitelist_total": 0,
      "overall_total": 892
    }, {
      "summary_date": "2014-12-25",
      "human_total": 385,
      "good_bot_total": 25,
      "bad_bot_total": 203,
      "whitelist_total": 0,
      "overall_total": 613
    }, {
      "summary_date": "2014-12-26",
      "human_total": 504,
      "good_bot_total": 17,
      "bad_bot_total": 200,
      "whitelist_total": 0,
      "overall_total": 721
    }, {
      "summary_date": "2014-12-27",
      "human_total": 284,
      "good_bot_total": 33,
      "bad_bot_total": 168,
      "whitelist_total": 0,
      "overall_total": 485
    }, {
      "summary_date": "2014-12-28",
      "human_total": 265,
      "good_bot_total": 30,
      "bad_bot_total": 182,
      "whitelist_total": 0,
      "overall_total": 477
    }, {
      "summary_date": "2014-12-29",
      "human_total": 684,
      "good_bot_total": 37,
      "bad_bot_total": 103,
      "whitelist_total": 0,
      "overall_total": 824
    }, {
      "summary_date": "2014-12-30",
      "human_total": 671,
      "good_bot_total": 23,
      "bad_bot_total": 122,
      "whitelist_total": 0,
      "overall_total": 816
    }, {
      "summary_date": "2014-12-31",
      "human_total": 502,
      "good_bot_total": 30,
      "bad_bot_total": 115,
      "whitelist_total": 0,
      "overall_total": 647
    }, {
      "summary_date": "2015-01-01",
      "human_total": 240,
      "good_bot_total": 26,
      "bad_bot_total": 199,
      "whitelist_total": 0,
      "overall_total": 465
    }, {
      "summary_date": "2015-01-02",
      "human_total": 501,
      "good_bot_total": 21,
      "bad_bot_total": 76,
      "whitelist_total": 0,
      "overall_total": 598
    }, {
      "summary_date": "2015-01-03",
      "human_total": 290,
      "good_bot_total": 16,
      "bad_bot_total": 82,
      "whitelist_total": 0,
      "overall_total": 388
    }, {
      "summary_date": "2015-01-04",
      "human_total": 328,
      "good_bot_total": 27,
      "bad_bot_total": 101,
      "whitelist_total": 0,
      "overall_total": 456
    }
  ]
};

RockinChart = window.RockinChart || {};

RockinChart.init = (function() {
  init.prototype.view = null;

  function init(json) {
    this.view = new RockinChart.View(json);
    this.view.display();
  }

  return init;

})();

RockinChart.View = (function() {
  View.prototype.json = null;

  View.prototype.chart = null;

  View.prototype.updater = null;

  View.prototype.data = null;

  View.prototype.chartData = {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'USD to EUR exchange rate from 2006 through 2008'
    },
    subtitle: {
      text: "Hello"
    },
    xAxis: {
      type: 'datetime',
      minRange: 14 * 24 * 3600000
    },
    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, Highcharts.getOptions().colors[0]], [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: []
  };

  View.prototype.getFirstDatePoint = function() {
    return new Date(this.json[0].summary_date).getTime();
  };

  View.prototype.getPointInterval = function() {
    return 24 * 3600 * 1000;
  };

  View.prototype.getSeriesWithData = function(series_name, data) {
    return {
      type: 'line',
      name: series_name,
      pointInterval: this.getPointInterval,
      pointStart: this.getFirstDatePoint,
      data: data
    };
  };

  View.prototype.buildChart = function() {
    $('#chart_container').highcharts(this.chartData);
    this.chart = $('#chart_container').highcharts();
    return this.updater = new RockinChart.Updater(this.chart);
  };

  View.prototype.buildSeries = function() {
    var k, ref, v;
    this.chartData.series = [];
    ref = this.data.data;
    for (k in ref) {
      v = ref[k];
      this.chartData.series.push(this.getSeriesWithData(k, v));
    }
    return this.buildChart();
  };

  View.prototype.addUpdatePoint = function(time, series, new_value) {
    return this.updater.addUpdatePoint(time, series, new_value);
  };

  View.prototype.display = function() {
    return this.buildSeries();
  };

  function View(json_data) {
    this.data = new RockinChart.Data(json_data);
  }

  return View;

})();

RockinChart.Updater = (function() {
  Updater.prototype.chart = null;

  Updater.prototype.findSeriesForName = function(name) {
    var k, ref, v;
    ref = this.chart.series;
    for (k in ref) {
      v = ref[k];
      if (v.name === name) {
        return Number(k);
      }
    }
    return false;
  };

  Updater.prototype.findPointKeyInSeries = function(series_id, value) {
    var k, ref, v;
    ref = this.chart.series[series_id].data;
    for (k in ref) {
      v = ref[k];
      if (v.x === value) {
        return Number(k);
      }
    }
    return false;
  };

  Updater.prototype.updatePointInSeries = function(series_id, point_id, value) {
    return this.chart.series[series_id].data[point_id].update(value);
  };

  Updater.prototype.addUpdatePoint = function(time, series, new_value) {
    var key_point_id, series_id;
    series_id = this.findSeriesForName(series);
    if (key_point_id = this.findPointKeyInSeries(series_id, time)) {
      return this.updatePointInSeries(series_id, key_point_id, new_value);
    } else {
      return this.chart.series[series_id].addPoint([time, new_value]);
    }
  };

  function Updater(chart) {
    this.chart = chart;
    console.log("Updater initd");
  }

  return Updater;

})();

RockinChart.Data = (function() {
  Data.prototype.json = null;

  Data.prototype.data = {};

  Data.prototype.getDateFromObject = function(item) {
    var k, v;
    for (k in item) {
      v = item[k];
      if (k === "summary_date") {
        return new Date(v).getTime();
      }
    }
    return false;
  };

  Data.prototype.setPoint = function(time, series, val) {
    if (!this.data[series]) {
      this.data[series] = [];
    }
    return this.data[series].push([time, val]);
  };

  Data.prototype.compileDataPointIntoSeries = function(item) {
    var k, results, time, v;
    time = this.getDateFromObject(item);
    results = [];
    for (k in item) {
      v = item[k];
      if (k !== "summary_date") {
        results.push(this.setPoint(this.getDateFromObject(item), k, v));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Data.prototype.sortData = function() {
    return this.json.sort(function(a, b) {
      return new Date(a.summary_date) - new Date(b.summary_date);
    });
  };

  Data.prototype.runThroughData = function() {
    var i, item, len, ref, results;
    this.sortData();
    ref = this.json;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      results.push(this.compileDataPointIntoSeries(item));
    }
    return results;
  };

  function Data(json_data) {
    this.json = json_data.categorized_domain_requests;
    this.runThroughData();
  }

  return Data;

})();

RockinForm = (function() {
  RockinForm.prototype.rockin_chart = null;

  RockinForm.prototype.form = null;

  RockinForm.prototype.isChecked = function(item) {
    if (item.checked) {
      return item.value;
    }
  };

  RockinForm.prototype.getRadioValue = function(radios) {
    var i, item, len, results;
    results = [];
    for (i = 0, len = radios.length; i < len; i++) {
      item = radios[i];
      results.push(this.isChecked(item));
    }
    return results;
  };

  RockinForm.prototype.isDateValid = function(date_string) {
    var ref;
    return (ref = date_string.match("\\d{4}-\\d{2}-\\d{2}")) != null ? ref : false;
  };

  RockinForm.prototype.validate = function() {
    return console.log("Needs to validate");
  };

  RockinForm.prototype.onSubmit = function(evt) {
    var date, type, value;
    evt.preventDefault();
    date = document.getElementById('date');
    value = document.getElementById('point_value');
    type = this.getRadioValue(document.getElementsByName('type_radio'));
    return console.log('Do something');
  };

  RockinForm.prototype.addPoint = function(date, series, new_value) {
    return this.rockin_chart.view.addUpdatePoint(new Date(date).getTime(), series, new_value);
  };

  RockinForm.prototype.setup = function() {
    this.form = document.getElementById('rockin_form');
    return this.form.addEventListener("submit", this.onSubmit);
  };

  function RockinForm(json) {
    this.rockin_chart = new RockinChart.init(json);
  }

  return RockinForm;

})();

rockin_form = new RockinForm(json_data);

rockin_form.setup();
