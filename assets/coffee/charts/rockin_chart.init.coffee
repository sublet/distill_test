RockinChart = window.RockinChart || {};

class RockinChart.init

  view: null

  constructor: (json) ->
    @view = new RockinChart.View(json) 
    @view.display()