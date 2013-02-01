window.IPRangeView = Backbone.View.extend({

	addNewRange : function() {
		var rowItem = new IPRangeItemView({
			model : new IPRangeModel({})
		});
		rowItem.currentTemplate = rowItem.formTemplate;
		rowItem.render();
		$(this.el).append($(rowItem.el));
	},
	render : function() {
		var thisObj = this;
		for (var i = 0; i < thisObj.model.length; i++) {
			var data = thisObj.model.toJSON()[i];
			var rowItem = new IPRangeItemView({
				model : new IPRangeModel(data)
			});
			$(thisObj.el).append($(rowItem.el));
		}
	}
}); 