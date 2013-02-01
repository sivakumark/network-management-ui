window.SelectConfigView = Backbone.View.extend({
	template : "select-config-type",
	selectionListener : null,
	events : {
		"change input[type='radio']" : "toogleConfig"
	},

	toogleConfig : function(event) {
		var value = $(event.target).val();
		this.selectionListener(value);
	},
	addSelectionListener : function(callback) {
		this.selectionListener = callback
	},
	render : function() {
		var data = this.model.toJSON();

		var thisObj = this;
		data.cid = this.cid
		dust.render(this.template, data, function(err, output) {
			if (err) {
			} else {
				$(thisObj.el).html(output);
				thisObj.selectionListener(data.type);
			}
		});
	}
});
