var StaticIPView = Backbone.View.extend({
			render : function() 
			{
				var thisObj = this;
				for (var i = 0; i < thisObj.model.length; i++) 
				{
					var data = thisObj.model.toJSON()[i];
					var rowItem = new StaticIPItemView({model : new StaticIPModel(data)});
					$(thisObj.el).append($(rowItem.el));
				}
			}
		});