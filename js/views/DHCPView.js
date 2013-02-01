window.DHCPView = Backbone.View.extend({
	events : {
		"click button.addRange" : "addRange",
	},
	addRange : function() {
		new AddRangeView({el:$(this.el).find(".ipRanges"), model: new IPRangeModel()});
	},
	render : function(configType) {
		/*
		var thisObj = this;
		var data = this.model.toJSON();
		
		dust.render(this.template, data, function(err, output) {
			if (err) {
			} else {
				$(thisObj.el).html(output);
				rangeView = new IPRangeView({
					el : $("#lan-range-view"),
					model : new IPRangeCollection(data.ranges)
				})
				rangeView.render();
			}
		});
		*/
	}
});
