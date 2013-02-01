window.StaticIPItemView = Backbone.View.extend({
	viewTemplate : "static-ip-view-tmp",
	formTemplate : "static-ip-form-tmp",
	currentTemplate : "static-ip-view-tmp",

	events : {
		"click button.editStaticIP" : "editStaticIP",
		"click button.saveStaticIP" : "saveStaticIP",
		"click button.cancelStaticIP" : "cancelStaticIP",
		"submit form" : "formSubmitted"
	},
	formSubmitted : function(e) {
		e.preventDefault();
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
	editStaticIP : function(e) {
		this.currentTemplate = this.formTemplate;
		this.updateTemplate(e, this.formTemplate);
	},
	saveStaticIP : function(e) {
		e.preventDefault();
		var data = Backbone.Syphon.serialize(this)
		this.model.set(data);
		this.currentTemplate = this.viewTemplate;
		this.updateTemplate(e, this.viewTemplate);
	},
	cancelStaticIP : function(e) {
		e.preventDefault();
		this.currentTemplate = this.viewTempate;
		this.updateTemplate(e, this.viewTemplate);
	},

	updateTemplate : function(event, templ) {
		var target = $(event.target).parent().parent().parent().parent().parent().parent();
		var thisObj = this;

		dust.render(templ, this.model.toJSON(), function(err, output) {
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