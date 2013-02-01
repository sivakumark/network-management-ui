
window.NetworkRouter = Backbone.Router.extend({
	routes : {
		"" : "fnNetworkInitList"
	},

	fnNetworkInitList : function() {
		networkModel = new NetworkModel()
		networkModel.fetch({
			success : function(model, response) {
				var lanData = model.toJSON()[0]
				
				var lanView = new LANView({
					el : $("#lanDetails"),
					model : new LANModel(lanData)
				});
				lanView.render();
			},
			error : function(data) {
			}
		});
	}
});

var app = new NetworkRouter();
Backbone.history.start();
