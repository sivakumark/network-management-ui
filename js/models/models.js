window.NetworkModel = Backbone.Model.extend(
{
	urlRoot : "http://localhost:3000/data/network.json"

});

window.IPRangeModel = Backbone.Model.extend(
{
	defaults :
	{
		"from" : "",
		"to" : ""
	},
	validation: 
	{
	    from: {
	      required: true
	    },
	    'to': {
	      required: true
	    }
    }
});

window.SelectConfigModel = Backbone.Model.extend(
{
});

window.StaticIPModel = Backbone.Model.extend(
{
});

window.DHCPIPModel = Backbone.Model.extend(
{
});

window.IPRangeCollection = Backbone.Collection.extend(
{
	model : IPRangeModel
});

window.VLANModel = Backbone.Model.extend(
{

})

window.LANModel = Backbone.Model.extend(
{

})
window.VLANCollection = Backbone.Collection.extend(
{
	model : VLANModel
});

window.StaticIPCollection = Backbone.Collection.extend(
{
	mode : StaticIPModel
});

