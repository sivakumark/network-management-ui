var StaticView = Backbone.View.extend({
	template : "lan-config-static",
	events : {
		"click button.addStaticIP" : "addStaticIP",
	},
	addStaticIP : function() {
		alert("static ip add clicked");
	},
	render : function(configType) {
		var data = this.model;
		
		var thisObj = this;

		dust.render(this.template, data, function(err, output) {
			if (err) {
			} else {
				$(thisObj.el).html(output);
				var staticIPView = new StaticIPView({
					el : $("#lan-static-ip"),
					model : new StaticIPCollection(thisObj.model)
				})
				staticIPView.render();
			}
		});
	}
}); 