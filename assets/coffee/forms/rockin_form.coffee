class RockinForm

  rockin_chart: null
  form: null

  isChecked: (item) ->
    return item.value if item.checked

  getRadioValue: (radios) ->
    @isChecked(item) for item in radios

  isDateValid: (date_string) ->
    date_string.match("\\d{4}-\\d{2}-\\d{2}") ? false

  validate: ->
    console.log("Needs to validate")

  onSubmit: (evt) ->
    evt.preventDefault()
    date = document.getElementById('date')
    value = document.getElementById('point_value')
    type = @getRadioValue(document.getElementsByName('type_radio'))
    console.log('Do something')

  ############################################
  # Public Functionality #####################
  ############################################

  # rockin_form.addPoint('2014-12-27', 'whitelist_total', 10000)
  addPoint: (date, series, new_value) ->
    @rockin_chart.view.addUpdatePoint(new Date(date).getTime(), series, new_value)

  setup: ->
    @form = document.getElementById('rockin_form'); 
    @form.addEventListener("submit", @onSubmit);

  constructor: (json) ->
    @rockin_chart = new RockinChart.init(json);
