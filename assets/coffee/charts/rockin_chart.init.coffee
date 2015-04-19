RockinChart = window.RockinChart || {};

class RockinChart.init

  view: null

  display: ->
    @view.display()

  constructor: (json) ->
    @view = new RockinChart.View(json)