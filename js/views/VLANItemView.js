var VLANItemView = Backbone.View.extend({
	currentTemplate : "vlan-view-tmp",

	initialize : function() {
		return this.render();
	},
	selectedConfigType : function(configType) {
		var targetel = $(this.el).children()[2];

		if (configType === "dhcp") {
			dhcpScreen = new DHCPView({
				el : targetel,
				model : new DHCPIPModel(this.model.toJSON().dhcp)
			});
			dhcpScreen.render();
		} else {
			staticScreen = new StaticView({
				el : targetel,
				model : new StaticIPModel(this.model.staticiproute)
			});
			staticScreen.render();
		}
	},
	render : function() {
		var thisObj = this;
		dust.render(this.currentTemplate, this.model.toJSON(), function(err, output) {
			if (err) {
			} else {
				$(thisObj.el).html(output);
				var configData = thisObj.model.toJSON().config[0];
				var configView = new SelectConfigView({
					el : $(thisObj.el).children()[1],
					model : new SelectConfigModel(configData)
				});
				configView.addSelectionListener(function(type) {
					thisObj.selectedConfigType(type);
				});
				configView.render();
			}
		});
		return this;
	}
}); 