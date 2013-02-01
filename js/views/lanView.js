window.LANView = Backbone.View.extend(
{
	template : "lan-template",
	events :
	{
		"click button.edit" : "editLan",
		"click button.save" : "saveLan",
		"click button.cancel" : "cancelLan",
		"change input[type='radio']" : "toogleConfig"
	},
	addRange : function()
	{
		
	},
	editLan : function()
	{
	},
	saveLan : function()
	{
	},
	cancelLan : function()
	{

	},
	toogleConfig : function(event)
	{
		var configType = $(event.target).val();
		this.model.get("config").type = configType;
		this.render();
	},
	selectedConfigType : function(configType)
	{
		if (configType === "dhcp")
		{
			dhcpScreen = new DHCPView(
			{
				el : $("#lanConfigType"),
				model : new DHCPIPModel(this.model.toJSON().dhcp)
			});
			dhcpScreen.render();
		}
		else
		{
			staticScreen = new StaticView(
			{
				el : $("#lanConfigType"),
				model : new StaticIPModel(this.model.staticiproute)
			});
			staticScreen.render();
		}
	},
	render : function()
	{
		var data = this.model.toJSON();
		var thisObj = this;
		
		dust.render(this.template, data, function(err, output)
		{
			if (err)
			{

			}
			else
			{
				$(thisObj.el).html(output);
				if (thisObj.model.get("config").type == "dhcp")
				{
					new DHCPView({el:$(thisObj.el).find(".dhcpView"), model:thisObj.model.get("dhcp")});
				}
				else
				{
					new StaticView({el:$(thisObj.el).find(".staticView"), model:thisObj.model.get("staticiproute")});
				}
				
				//var configModel = thisObj.model.toJSON().config[0];
				
				/*
				 var configView = new SelectConfigView({
				 el : $("#selectConfigType"),
				 model : new SelectConfigModel(configModel)
				 });
				 configView.addSelectionListener(function(type) {
				 thisObj.selectedConfigType(type);
				 });

				 configView.render();
				 */
				/*
				 var vlanView = new VLANView({
				 el : $("#vlanDetails"),
				 model : new VLANCollection(thisObj.model.toJSON().vlaninterfaces)
				 });
				 vlanView.render();
				 */
			}
		});
	}
});
