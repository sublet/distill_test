
class RockinChart.Data

  json: null
  data: {}

  getDateFromObject: (item) ->
    for k, v of item
      if k == "summary_date"
        return new Date(v).getTime()
    false

  setPoint: (time, series, val) ->
    @data[series] = [] if !@data[series]
    @data[series].push [time,val]

  compileDataPointIntoSeries: (item) ->
    time = @getDateFromObject(item)
    for k, v of item # 2nd loop
      @setPoint(@getDateFromObject(item), k, v) if k != "summary_date" && k != "overall_total"

  sortData: ->
    @json.sort (a, b) ->
      new Date(a.summary_date) - new Date(b.summary_date)

  runThroughData: ->
    @sortData()
    @compileDataPointIntoSeries(item) for item in @json # 1st loop

  constructor: (json_data) ->
    @json = json_data.categorized_domain_requests
    @runThroughData()
    console.log("[RF] Data initd")