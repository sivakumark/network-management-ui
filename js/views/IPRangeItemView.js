var IPRangeItemView = Backbone.View.extend({
	viewTemplate : "lan-view-range-tmp",
	formTemplate : "lan-form-range-tmp",
	currentTemplate : "lan-view-range-tmp",

	events : {
		"click button.editRange" : "editRange",
		"click button.saveRange" : "saveRange",
		"click button.cancelRange" : "cancelRange",
		"submit form" : "formSubmitted",
		"click button.deleteRange" : "deleteRange"
	},

	toggleButtons : function() {
		if ($("#editRange").hasClass("hide")) {
			$("#editRange").removeClass("hide");
			$("#deleteRange").removeClass("hide");
			$("#saveRange").addClass("hide");
			$("#cancelRange").addClass("hide");
		} else {
			$("#editRange").addClass("hide");
			$("#deleteRange").addClass("hide");
			$("#saveRange").removeClass("hide");
			$("#cancelRange").removeClass("hide");
		}
	},
	initialize : function() {
		return this.render();
	},
	editRange : function(e) {
		this.currentTemplate = this.formTemplate;
		this.updateTemplate(e, this.formTemplate);
	},
	deleteRange : function(e) {
		$(e.target).parent().parent().remove();
	},
	formSubmitted : function(e) {
		e.preventDefault();
	},
	saveRange : function(e) {
		e.preventDefault();
		var data = Backbone.Syphon.serialize(this);
		this.model.set(data);
		this.currentTemplate = this.viewTemplate;
		this.updateTemplate(e);
	},
	cancelRange : function(e) {
		this.currentTemplate = this.viewTempate;
		this.updateTemplate(e);
	},

	updateTemplate : function(event) {
		var target = $(event.target).parent().parent();
		var thisObj = this;

		dust.render(this.currentTemplate, this.model.toJSON(), function(err, output) {
			if (err) {

			} else {
				$(target).html(output);
			}
		});
	},
	render : function() {
		var thisObj = this;
		dust.render(this.currentTemplate, this.model.toJSON(), function(err, output) {
			if (err) {
				callback("failed");
			} else {
				$(thisObj.el).html(output)
			}
		});
		return this;
	}
});
