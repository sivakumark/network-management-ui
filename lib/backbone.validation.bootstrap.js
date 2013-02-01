_.extend(Backbone.Validation.callbacks, {
  valid: function(view, attr, selector){
    var control = view.$('[' + selector + '=' + attr + ']');
    var group = control.parents(".control-group");
    group.removeClass("error");
	group.addClass("success");
    group.find(".help-inline.error-message").remove();
  },
  invalid: function(view, attr, error, selector) 
  {
    var control = view.$('[' + selector + '=' + attr + ']');
    var group = control.parents(".control-group");
	group.removeClass("success");
    group.addClass("error");
    if (group.find(".help-inline").length === 0){
        group.find(".controls").append("<span class=\"help-inline error-message\"></span>");
    }
    var target = group.find(".help-inline");
    target.text(error); 
  }
});