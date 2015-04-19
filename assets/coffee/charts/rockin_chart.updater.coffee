class RockinChart.Updater

  chart: null

  findSeriesForName: (name) ->
    for k, v of @chart.series
      return Number(k) if v.name == name 
    false

  findPointKeyInSeries: (series_id, value) ->
    for k, v of @chart.series[series_id].data
      return Number(k) if v.x == value 
    false

  updatePointInSeries: (series_id, point_id, value) ->
    @chart.series[series_id].data[point_id].update(value);

  addUpdatePoint: (time, series, new_value) ->
    series_id = @findSeriesForName(series)
    if key_point_id = @findPointKeyInSeries(series_id, time)
      @updatePointInSeries(series_id, key_point_id, new_value)
    else
      @chart.series[series_id].addPoint([time,new_value])

  constructor: (chart) ->
    @chart = chart
    console.log("Updater initd")