class RockinForm

  rockin_chart: null
  form: null

  getRadioValue: (radios) ->
    for item in radios
      return item.value if item.checked
    false

  prettifyText: (name) ->
    name.replace(/\_/gi, ' ')

  getRadioButton: (name) ->
    '<li><input type="radio" id="type_radio_'+name+'" name="type_radio" value="'+name+'" /><label for="type_radio_'+name+'"><span></span>'+@prettifyText(name)+'</label></li>'

  setupRadioButtons: ->
    items = ""
    items += @getRadioButton(item) for item in @rockin_chart.view.getSeriesNames()
    document.getElementById("radio_buttons").innerHTML = items;

  isDateValid: (date_string) ->
    date_string.match("\\d{4}-\\d{2}-\\d{2}") ? false

  isValidNumber: (n) ->
    return !isNaN(parseFloat(n)) && isFinite(n);

  onSubmit: (e) ->
    e.preventDefault()
    date    = document.getElementById('date').value
    value   = Number(document.getElementById('point_value').value)
    type    = @getRadioValue(document.getElementsByName('type_radio'))
    if @isDateValid(date) && @isValidNumber(value) && type
      @addPoint(date, type, Number(value))
    else
      alert("Please validate your data is correct!")

  ############################################
  # Public Functionality #####################
  ############################################

  # rockin_form.addPoint('2014-12-27', 'whitelist_total', 10000)
  addPoint: (date, series, new_value) ->
    @rockin_chart.view.addUpdatePoint(new Date(date).getTime(), series, new_value)

  setup: ->
    @form = document.getElementById('rockin_form');
    @form.addEventListener("submit", @onSubmit.bind(this));
    @rockin_chart.display()
    @setupRadioButtons()

  constructor: (json) ->
    @rockin_chart = new RockinChart.init(json);
