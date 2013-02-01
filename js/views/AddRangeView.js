window.AddRangeView = Backbone.View.extend(
{
	template : "add-range-view",
	viewTemplate : "view-range-view",
	events :
	{
		"click button.saveRange" : "saveRange",
		"click button.cancel" : "cancelRange"
	},
	saveRange : function(event)
	{
		event.preventDefault();
		alert()
		var data = Backbone.Syphon.serialize($(event.target).closest('tr').child);
		alert(JSON.stringify(data));
		this.model.set(data);
		alert(JSON.stringify(this.model));
				
		if (this.model.isValid())
		{
			//Save Logic will go here
		}
	},
	cancelRange : function(event)
	{
		event.preventDefault();
		$(event.target).closest('tr').remove();
	},
	initialize : function()
	{
		return this.render();
	},
	render : function()
	{
		var thisObj = this;
		
		dust.render(this.template, this.model, function(err, output)
		{
			$(thisObj.el).append(output);
		});
	}
});
