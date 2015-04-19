//= include data/data.coffee
//= include charts/rockin_chart.init.coffee
//= include charts/rockin_chart.view.coffee
//= include charts/rockin_chart.updater.coffee
//= include charts/rockin_chart.data.coffee
//= include forms/rockin_form.coffee

rockin_form = new RockinForm(json_data);
rockin_form.setup();