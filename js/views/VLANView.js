var VLANView = Backbone.View.extend({
			events:{
				"click button.addRange" : "addRange"
			},
			addRange:function(event)
			{
			},
			render : function() 
			{
				var thisObj = this;
				for (var i = 0; i < thisObj.model.length; i++) 
				{
					var data = thisObj.model.toJSON()[i];
					var rowItem = new VLANItemView({model : new VLANModel(data)});
					$(thisObj.el).append($(rowItem.el));
				}
				
			}
		});