
class RockinChart.View
  
  json: null
  chart: null
  updater: null
  data: null

  chartData: {
    chart: {
      zoomType: 'x'
    },
    title: {
      text: 'Bot Results'
    },
    subtitle: {
      text: "This is a rockin chart with rockin results"
    },
    xAxis: {
      type: 'datetime',
      minRange: 14 * 24 * 3600000 # fourteen days
    },
    yAxis: {
      title: {
        text: 'Bots'
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
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
  }

  # Getters
  getFirstDatePoint: ->
    new Date(@json[0].summary_date).getTime()

  getPointInterval: ->
    (24 * 3600 * 1000) # Hours * Seconds in Hour * Milliseconds

  # Build Final Chart Data
  getSeriesWithData: (series_name, data) ->
    {
      type: 'line',
      name: series_name.replace(/\_/gi, ' ').replace(/total/, 'requests'),
      pointInterval: @getPointInterval,
      pointStart: @getFirstDatePoint,
      data: data
    }

  buildChart: ->
    $('#chart_container').highcharts @chartData
    @chart = $('#chart_container').highcharts()
    @updater = new RockinChart.Updater(@chart)

  buildSeries: ->
    @chartData.series = []
    @chartData.series.push @getSeriesWithData(k, v) for k, v of @data.data
    @buildChart()

  ############################################
  # Public Functionality #####################
  ############################################

  # Update/Add Point
  # chart.addPoint('2014-12-27', 'whitelist_total', 2000)
  addUpdatePoint: (time, series, new_value) ->
    @updater.addUpdatePoint(time, series, new_value)

  getSeriesNames: ->
    item.name for item in @chart.series

  display: ->
    @buildSeries()
    
  constructor: (json_data) ->
    @data = new RockinChart.Data(json_data)
    console.log("[RF] View initd")
